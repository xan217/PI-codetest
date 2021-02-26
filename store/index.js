import { STATUS, MESSAGES, HEADERS } from './constants';
import axios from 'axios';

export const state = () => ({
  _drawer:          false,
  _pageTitle:       '',
  _actualUser:      null,
  _dataStatus:      0,
  _snackbar: {
    status:         false,
    message:        '',
    color:          '',
    persistant:     false
  },
  _onlineStatus:    true
});

export const getters = {
  getDrawer( state )        { return state._drawer },
  getSnackbar( state )      { return state._snackbar },
  getPageTitle( state )     { return state._pageTitle },
  getDataStatus( state )    { return state._dataStatus },
  getActualUser( state )    { return state._actualUser },
  getOnlineStatus( state )  { return state._onlineStatus },
}

export const actions = {
  async getUser( { commit } ) {
    const user = await axios.get( "https://jsonplaceholder.typicode.com/users/1" );
    commit("updateUser", user);
    return user;
  },
  async saveUser( { commit }, user ) {

    if( process.browser ){
      try{
        localStorage.setItem( "user", JSON.stringify(user) );
      }
      catch( err ){
        commit( 'presentToast', [STATUS[0], `${ MESSAGES.not_saved } ${ err }`, 'red darken-4', -1] );
        return false;
      }
      /*
      //CORS Warning restriction
      let serverResponse = await axios({
                                    method: 'PUT',
                                    url: "https://postman-echo.com/put",
                                    data: user,
                                    headers: HEADERS,
                                    xsrfCookieName: 'csrftoken',
                                    xsrfHeaderName: 'X-CSRFToken',
                                    withCredentials: true
                                  });
      
      /** */

      let serverResponse = 0;
      //Generated a tandom value for server error simulation
      if( $nuxt.isOnline )
        serverResponse = Math.random() > 0.15 ? true : false;

      if( serverResponse ){
        commit( 'presentToast', [STATUS[2], MESSAGES.sent, 'green darken-3', 3000] );
      }
      else{
        commit( 'presentToast', [STATUS[1], MESSAGES.saved_but_not_sent, 'amber darken-4', 6000] );
      }
    }
    else{
      commit( 'presentToast', [STATUS[0], MESSAGES.not_saved, 'red darken-4', -1] );
    }
  },
  toggleOnline({ commit, getters, dispatch }, onlineStatus ){
    commit( 'setOnlineStatus', onlineStatus );

    if( getters.getDataStatus == STATUS[1] ) 
      dispatch('saveUser', localStorage.getItem("user") );
  },

  hideSnackbar({ commit })          { commit( 'hideToast'); },
  toggleDrawer({ commit })          { commit( 'setDrawerState'); },
  setTitle( { commit }, pageTitle ) { commit( 'setPageTitle', pageTitle ); }
}

export const mutations = {
  setDrawerState( state ){
    state._drawer               = !state._drawer;
  },
  setPageTitle( state, pageTitle ){
    state._pageTitle            = pageTitle;
  },
  updateUser( state, user ){
    state._actualUser           = user;
  },
  presentToast( state, params ){
    state._dataStatus           = params[0];
    state._snackbar.type        = params[2];
    state._snackbar.message     = params[1];
    state._snackbar.timeout     = params[3];
    state._snackbar.status      = true;
  },
  hideToast( state ){
    state._snackbar.status      = false;
    state._snackbar.type        = '';
    state._snackbar.message     = '';
    state._snackbar.timeout     = 0;
  },
  setOnlineStatus( state, onlineStatus ){
    state._onlineStatus         = onlineStatus;
  }
}