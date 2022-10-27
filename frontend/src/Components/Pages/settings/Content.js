import React from 'react';

// ? SCSS
import '../../assets/scss/settings-scss/partner.scss';
import Scss from '../../assets/scss/settings-scss/content.module.scss';
import '../../assets/scss/settings-scss/responsive.scss';

// ? ASSETS
import '../../assets/css/Link/link.scss';

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

function Content() {
  return (
    <div id={Scss.ContentContainer} className="ContentContainerResp">
      {/* CONTENT */}
      <NotificationPageContent />
    </div>
  );
}

export default Content;
