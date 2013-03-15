// Class
$.GMaps = GMaps;

$.GMaps.mapEvents = [
  "bounds_changed",
  "center_changed",
  "click",
  "dblclick",
  "drag",
  "dragend",
  "dragstart",
  "heading_changed",
  "idle",
  "maptypeid_changed",
  "mousemove",
  "mouseout",
  "mouseover",
  "projection_changed",
  "resize",
  "rightclick",
  "tilesloaded",
  "tilt_changed",
  "zoom_changed"
];

// jQuery Plugin
$.fn.gmaps = function(options) {

  // No element found, skip.
  if (this.length < 1) return;

  // Only the first element
  var el          = $(this[0]),
      map         = el.data("gmaps"),
      newInstance = (map===undefined),
      autodetect  = (options===undefined);

  // Normalize options
  if ($.isString(options)) {
    options = {
      address: options
    };
  }

  // New instance
  if (newInstance) {

    var id = $.uid("gmaps-"),

        defaultOptions = {
          lat: 0,
          lng: 0
        };

    if ($.isPlainObject(options)) {
      options = $.extend({}, defaultOptions, options);
    }

    // Set id
    el.attr("id", id);
    options.div = '#' + id;

    // Override events
    $.each($.GMap.mapEvents, function(i, eventName){

      var originalEvent =
            ($.isFunction(options[eventName])) ?
              options[eventName] :
              $.noop();

      options[eventName] = function(){

        var args = $.makeArray(arguments);

        // Trigger original event
        originalEvent.apply(map, arguments);

        // Trigger jQuery event
        el.trigger.apply(el, ["map_" + eventName].concat(args));
      }
    });

    // Instantiate gmaps
    map = el.data("gmaps") = new GMaps(options);

    // Extend with go method
    map.go = function(lat, lng) {
      map.setCenter(lat, lng);
      map.addMarker({lat: lat, lng: lng});
    }

    // Auto-detect location
    if (autodetect) {
      GMaps.geolocate({
        success: function(position) {
          map.go(position.coords.latitude, position.coords.longitude);
        }
      });
    }

    return map;

  // Existing instance
  } else {

    var lat = options.lat,
        lng = options.lng;

    // Update location
    if ($.isNumber(lat) || $.isNumber(lng)) {
      map.go(lat, lng);
    }

    return map;
  }

  // Resolve lat/lng from address
  if (options.address) {

    GMaps.geocode({
      address: options.address,
      callback: function(results, status) {
        if (status=="OK") {
          var coords = results[0].geometry.location;
          map.go(coords.lat(), coords.lng());
        }
      }
    });

    return map;
  }
};
