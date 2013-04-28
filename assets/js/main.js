/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var ThinkSandwiches = (function($, undefined) {
  var client_id = '1c154ff28eae4749a920bbc9a4ac83ff';
  var bobtv_id = '811721';
  var getRecentUrl = 'https://api.instagram.com/v1/users/' + bobtv_id + '/media/recent';

  function isset(obj) {
    return typeof(obj) !== 'undefined';
  }

  return {
    getInstagrams: function(targetSelector, count, start, end) {
      var queryParams = {
        access_token: client_id
      };
      if (isset(count)) {
        queryParams.count = count;
      }

      if (isset(start)) {
        queryParams.min_id = start;
      }

      if (isset(end)) {
        queryParams.max_id = end;
      }

      $.get(getRecentUrl, queryParams, function(data) {
        console.log(data);
      });
    },
    renderContent: function(selector) {

    }

  };
})(window.jQuery);


