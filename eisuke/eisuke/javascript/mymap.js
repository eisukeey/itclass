function initMap() {
  // 地図の中心を決める
  var latlng = new google.maps.LatLng(35.304233, 139.481074);

  // 地図を表示するためのオプションを設定する
  var opt = {
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // 地図を表示する。
  var map = new google.maps.Map(document.getElementById('map'), opt);
}
