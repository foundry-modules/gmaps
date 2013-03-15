
  module.resolveWith(GMaps);

});

// Load google maps api
$.require()
  .script("http://maps.google.com/maps/api/js?sensor=true&callback=" + callbackId)
  .done();

};
// module factory: end

dispatch("gmaps")
.containing(moduleFactory)
.to("$FOUNDRY_NAMESPACE Modules");

}());
