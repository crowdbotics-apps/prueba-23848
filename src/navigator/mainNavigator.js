import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList193217Navigator from '../features/ArticleList193217/navigator';
import ArticleList193216Navigator from '../features/ArticleList193216/navigator';
import ArticleList193215Navigator from '../features/ArticleList193215/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList193217: { screen: ArticleList193217Navigator },
ArticleList193216: { screen: ArticleList193216Navigator },
ArticleList193215: { screen: ArticleList193215Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
