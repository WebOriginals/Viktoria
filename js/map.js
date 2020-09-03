  var wWidth = $(window).innerWidth();

  function initMap() {
      var map = new google.maps.Map(
          document.getElementById('map'), {
              zoom: 17,
            //   center: {
            //           lat: 45.048605,
            //           lng: 38.985924
            //   },
              center: {
                      lat: 45.048704,
                      lng: 38.984945
              }, 
              scrollwheel: false,
                styles: [{
                    stylers: [{ 
                        saturation: -100
                    }]  
                }],
              // center: {
              //     lat: 44.597807,
              //     lng: 40.109275
              // },
              // center: {
              //     lat: 44.596524,
              //     lng: 40.109138
              // },
              // styles: [{
              //   stylers: [{
              //     saturation: -100
              //   }]
              // }]
          });

      var contentString =
          '<div class="info__title" style="font-size:18px;">Виктория</div><div class="info__address">г. Краснодар, ул. Одесская 48, литер О</div>';
      var infoWindow = new google.maps.InfoWindow({
          content: contentString
      });

      new google.maps.Marker({
          position: {
                      lat: 45.048605,
                      lng: 38.985924
          },
            // size: new google.maps.Size(66, 82),
            // scaledSize: new google.maps.Size(33, 41),
            // origin: new google.maps.Point(0, 0),
            // anchor: new google.maps.Point(0, 41),
            // size: new google.maps.Size(47, 65),
            // scaledSize: new google.maps.Size(20, 45),
            // origin: new google.maps.Point(0, 0),
            // anchor: new google.maps.Point(0, 65),
            // size: Size(47, 65),
            // scaledSize: Size(27, 25),
          map: map,
        //   icon: 'img/baloon.png'
          icon: 'img/baloon.svg' 
      }).addListener('click', function (event) {
          infoWindow.open(map, this);
      });

      function adapt() {
          wWidth = $(window).innerWidth();
          if (map != 'undefined') {
              console.log('шаг 1');
              if (wWidth < 575) {
                  map.setCenter({
                    //   lat: 45.048605,
                    //   lng: 38.985924
                        lat: 45.048704,
                        lng: 38.984945
                  });
                  console.log('меньше 991');
                  console.log('Ширина =' + wWidth);
              } else {
                  map.setCenter({
                      lat: 45.048605,
                      lng: 38.985924
                  });
                  // console.log('стартовые');
                  // console.log('Ширина =' + wWidth);
              }
          }
      }
      // Вот здесь
      $(window).on('resize', function () {

          // Тут замеряй размер двигай куда надо
          adapt();

      });

  }









//   ////пример для svg
//   		setTimeout(function () {
//   		    //obPlacemark.setAnimation(google.maps.Animation.DROP); 
//   		    icon = '/bitrix/templates/main/img/icons/retina/map_marker.png';
//   		    var image = {
//   		        url: icon,
//   		        size: new google.maps.Size(66, 82),
//   		        scaledSize: new google.maps.Size(33, 41),
//   		        origin: new google.maps.Point(0, 0),
//   		        anchor: new google.maps.Point(0, 41)
//   		    };
//   		    var shadow = {
//   		        url: icon,
//   		        size: new google.maps.Size(66, 82),
//   		        scaledSize: new google.maps.Size(33, 41),
//   		        origin: new google.maps.Point(0, 0),
//   		        anchor: new google.maps.Point(0, 41)
//   		    };
//   		    var obPlacemark = new google.maps.Marker({
//   		        'position': new google.maps.LatLng(arPlacemark.LAT, arPlacemark.LON),
//   		        'map': map,
//   		        icon: image,
//   		        //shadow: shadow,
//   		        animation: google.maps.Animation.DROP
//   		    });

//   		    if (BX.type.isNotEmptyString(arPlacemark.TEXT)) {
//   		        obPlacemark.infowin = new google.maps.InfoWindow({
//   		            content: arPlacemark.TEXT.replace(/\n/g, '<br />')
//   		        });

//   		        google.maps.event.addListener(obPlacemark, 'click', function () {
//   		            if (null != window['__bx_google_infowin_opened_' + map_id])
//   		                window['__bx_google_infowin_opened_' + map_id].close();

//   		            this.infowin.open(this.map, this);
//   		            window['__bx_google_infowin_opened_' + map_id] = this.infowin;
//   		        });
//   		    }

//   		    return obPlacemark;

//   		}, 1000);