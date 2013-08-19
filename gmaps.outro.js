
  module.resolveWith(GMaps);

});

// Load google maps api
$.require()
  .script($.uri(window.location).protocol() + "://maps.google.com/maps/api/js?sensor=true&callback=" + callbackId)
  .done();

};
// module factory: end

Dispatch("gmaps")
.containing(moduleFactory)
.to("$FOUNDRY_NAMESPACE Modules");

}());
