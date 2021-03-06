
  module.resolveWith(GMaps);

});

var language = $('meta[name="foundry:location:language"]').attr("content") || 'en';

if (window.google && window.google.maps){
    window[callbackId]();
} else {
    // Load google maps api
    $.require()
      .script($.uri(window.location).protocol() + "://maps.google.com/maps/api/js?sensor=true&callback=" + callbackId + "&language=" + language)
      .done();
}


};
// module factory: end

%BOOTCODE%.module("gmaps", moduleFactory);

}());
