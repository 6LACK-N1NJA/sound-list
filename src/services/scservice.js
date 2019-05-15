import _ from 'lodash';
import Sc from 'soundcloud';

class ScloudService (){
  async getDefaultTracks(){
    const response = () => {return Sc.get('/me/tracks')}
    if (!response.ok) {
      throw new Error('ScloudService getDefaultTracks failed, HTTP status ${response.status}');
    }
    const data = await response.json();
    const tracks = _.get(data, 'data.tracks');
    if (!tracks) {
      throw new Error('ScloudService getDefaultTracks failed, tracks not returned');
    }
    return tracks;
  }
}

export default new ScloudService();
