$( function() {
                    var icons = {
                      header: "ui-icon-triangle-1-e",
                      activeHeader: "ui-icon-triangle-1-s"
                    };
                    $( "#accordion" ).accordion({
                      icons: icons,
                      animate:200,
                      heightStyle:true,
                      collapsible: true
                    });
                    $( "#toggle" ).button().on( "click", function() {
                      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
                        $( "#accordion" ).accordion( "option", "icons", icons );
                      } else {
                        $( "#accordion" ).accordion( "option", "icons", icons );
                      };
                        
                    });
                  } );