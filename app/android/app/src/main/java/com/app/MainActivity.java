package com.app;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
           sharedI18nUtilInstance.allowRTL(context, true);
  @Override
  protected String getMainComponentName() {
    return "app";
  }
}
