import React from 'react';

// ? SCSS
import '../../assets/scss/settings-scss/partner.scss';
import Scss from '../../assets/scss/settings-scss/content.module.scss';
import '../../assets/scss/settings-scss/responsive.scss';

// ? ASSETS
import '../../assets/css/Link/link.scss';
import '../../assets/css/Alert/alert.scss';

// ? CONTENTS
import GeneralPageContent from './contents/GeneralPageContent';
import SecurityAndLoginPageContent from './contents/SecurityAndLoginPageContent';
import FacebookInformationPageContent from './contents/FacebookInformationPageContent';
import PrivacyPageContent from './contents/PrivacyPageContent';
import ProfileAndTagPageContent from './contents/ProfileAndTagPageContent';
import PublicPostsPageContent from './contents/PublicPostsPageContent';
import BlockPageContent from './contents/BlockPageContent';
import LanguageAndRegionPageContent from './contents/LanguageAndRegionPageContent';
import StoriesPageContent from './contents/StoriesPageContent';
import NotificationPageContent from './contents/NotificationPageContent';

// * REACT ROUTER 5.2.0
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotMatch from '../NotMatch/NotMatch';

function Content() {
  let { path } = useRouteMatch();

  return (
    <div id={Scss.ContentContainer} className="ContentContainerResp">
      <Switch>
        <Route exact path={`${path}`} component={GeneralPageContent}/>
        <Route path={`${path}/generic`} component={GeneralPageContent}/>
        <Route
          path={`${path}/security-and-login`}
          component={SecurityAndLoginPageContent}
        />

        <Route
          path={`${path}/facebook-info`}
          component={FacebookInformationPageContent}
        />

        <Route path={`${path}/privacy`} component={PrivacyPageContent} />
        <Route
          path={`${path}/profile-and-tag`}
          component={ProfileAndTagPageContent}
        />
        <Route
          path={`${path}/public-posts`}
          component={PublicPostsPageContent}
        />

        <Route path={`${path}/block`} component={BlockPageContent} />
        <Route
          path={`${path}/language-and-region`}
          component={LanguageAndRegionPageContent}
        />

        <Route path={`${path}/stories`} component={StoriesPageContent} />
        <Route
          path={`${path}/notification`}
          component={NotificationPageContent}
        />

        <Route path={`${path}/*`} component={NotMatch} />
      </Switch>
    </div>
  );
}

export default Content;
