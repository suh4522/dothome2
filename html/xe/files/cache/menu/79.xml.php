<?php define('__XE__', true); require_once('/host/home4/suh45222/html/xe/config/config.inc.php'); $oContext = Context::getInstance(); $oContext->init(); header("Content-Type: text/xml; charset=UTF-8"); header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT"); header("Cache-Control: no-store, no-cache, must-revalidate"); header("Cache-Control: post-check=0, pre-check=0", false); header("Pragma: no-cache"); $lang_type = Context::getLangType(); $is_logged = Context::get('is_logged'); $logged_info = Context::get('logged_info'); $site_srl = 0;$site_admin = false;if($site_srl) { $oModuleModel = getModel('module');$site_module_info = $oModuleModel->getSiteInfo($site_srl); if($site_module_info) Context::set('site_module_info',$site_module_info);else $site_module_info = Context::get('site_module_info');$grant = $oModuleModel->getGrant($site_module_info, $logged_info); if($grant->manager ==1) $site_admin = true;}if($is_logged) {if($logged_info->is_admin=="Y") $is_admin = true; else $is_admin = false; $group_srls = array_keys($logged_info->group_list); } else { $is_admin = false; $group_srls = array(); } $oContext->close(); ?><root><node node_srl="80" parent_srl="0" menu_name_key='Welcome Page' text="<?php if(true) { $_names = array("en"=>'Welcome Page',"ko"=>'Welcome Page',"jp"=>'Welcome Page',"zh-CN"=>'Welcome Page',"zh-TW"=>'Welcome Page',"fr"=>'Welcome Page',"de"=>'Welcome Page',"ru"=>'Welcome Page',"es"=>'Welcome Page',"tr"=>'Welcome Page',"vi"=>'Welcome Page',"mn"=>'Welcome Page',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>"><node node_srl="81" parent_srl="80" menu_name_key='SAMPLE 1' text="<?php if(true) { $_names = array("en"=>'SAMPLE 1',"ko"=>'SAMPLE 1',"jp"=>'SAMPLE 1',"zh-CN"=>'SAMPLE 1',"zh-TW"=>'SAMPLE 1',"fr"=>'SAMPLE 1',"de"=>'SAMPLE 1',"ru"=>'SAMPLE 1',"es"=>'SAMPLE 1',"tr"=>'SAMPLE 1',"vi"=>'SAMPLE 1',"mn"=>'SAMPLE 1',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>" /><node node_srl="82" parent_srl="80" menu_name_key='SAMPLE 2' text="<?php if(true) { $_names = array("en"=>'SAMPLE 1',"ko"=>'SAMPLE 1',"jp"=>'SAMPLE 1',"zh-CN"=>'SAMPLE 1',"zh-TW"=>'SAMPLE 1',"fr"=>'SAMPLE 1',"de"=>'SAMPLE 1',"ru"=>'SAMPLE 1',"es"=>'SAMPLE 1',"tr"=>'SAMPLE 1',"vi"=>'SAMPLE 1',"mn"=>'SAMPLE 1',"en"=>'SAMPLE 2',"ko"=>'SAMPLE 2',"jp"=>'SAMPLE 2',"zh-CN"=>'SAMPLE 2',"zh-TW"=>'SAMPLE 2',"fr"=>'SAMPLE 2',"de"=>'SAMPLE 2',"ru"=>'SAMPLE 2',"es"=>'SAMPLE 2',"tr"=>'SAMPLE 2',"vi"=>'SAMPLE 2',"mn"=>'SAMPLE 2',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>" /><node node_srl="83" parent_srl="80" menu_name_key='SAMPLE 3' text="<?php if(true) { $_names = array("en"=>'SAMPLE 1',"ko"=>'SAMPLE 1',"jp"=>'SAMPLE 1',"zh-CN"=>'SAMPLE 1',"zh-TW"=>'SAMPLE 1',"fr"=>'SAMPLE 1',"de"=>'SAMPLE 1',"ru"=>'SAMPLE 1',"es"=>'SAMPLE 1',"tr"=>'SAMPLE 1',"vi"=>'SAMPLE 1',"mn"=>'SAMPLE 1',"en"=>'SAMPLE 2',"ko"=>'SAMPLE 2',"jp"=>'SAMPLE 2',"zh-CN"=>'SAMPLE 2',"zh-TW"=>'SAMPLE 2',"fr"=>'SAMPLE 2',"de"=>'SAMPLE 2',"ru"=>'SAMPLE 2',"es"=>'SAMPLE 2',"tr"=>'SAMPLE 2',"vi"=>'SAMPLE 2',"mn"=>'SAMPLE 2',"en"=>'SAMPLE 3',"ko"=>'SAMPLE 3',"jp"=>'SAMPLE 3',"zh-CN"=>'SAMPLE 3',"zh-TW"=>'SAMPLE 3',"fr"=>'SAMPLE 3',"de"=>'SAMPLE 3',"ru"=>'SAMPLE 3',"es"=>'SAMPLE 3',"tr"=>'SAMPLE 3',"vi"=>'SAMPLE 3',"mn"=>'SAMPLE 3',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>" /></node><node node_srl="84" parent_srl="0" menu_name_key='Board' text="<?php if(true) { $_names = array("en"=>'Welcome Page',"ko"=>'Welcome Page',"jp"=>'Welcome Page',"zh-CN"=>'Welcome Page',"zh-TW"=>'Welcome Page',"fr"=>'Welcome Page',"de"=>'Welcome Page',"ru"=>'Welcome Page',"es"=>'Welcome Page',"tr"=>'Welcome Page',"vi"=>'Welcome Page',"mn"=>'Welcome Page',"en"=>'Board',"ko"=>'Board',"jp"=>'Board',"zh-CN"=>'Board',"zh-TW"=>'Board',"fr"=>'Board',"de"=>'Board',"ru"=>'Board',"es"=>'Board',"tr"=>'Board',"vi"=>'Board',"mn"=>'Board',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>"><node node_srl="85" parent_srl="84" menu_name_key='SAMPLE 1' text="<?php if(true) { $_names = array("en"=>'SAMPLE 1',"ko"=>'SAMPLE 1',"jp"=>'SAMPLE 1',"zh-CN"=>'SAMPLE 1',"zh-TW"=>'SAMPLE 1',"fr"=>'SAMPLE 1',"de"=>'SAMPLE 1',"ru"=>'SAMPLE 1',"es"=>'SAMPLE 1',"tr"=>'SAMPLE 1',"vi"=>'SAMPLE 1',"mn"=>'SAMPLE 1',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>" /><node node_srl="86" parent_srl="84" menu_name_key='SAMPLE 2' text="<?php if(true) { $_names = array("en"=>'SAMPLE 1',"ko"=>'SAMPLE 1',"jp"=>'SAMPLE 1',"zh-CN"=>'SAMPLE 1',"zh-TW"=>'SAMPLE 1',"fr"=>'SAMPLE 1',"de"=>'SAMPLE 1',"ru"=>'SAMPLE 1',"es"=>'SAMPLE 1',"tr"=>'SAMPLE 1',"vi"=>'SAMPLE 1',"mn"=>'SAMPLE 1',"en"=>'SAMPLE 2',"ko"=>'SAMPLE 2',"jp"=>'SAMPLE 2',"zh-CN"=>'SAMPLE 2',"zh-TW"=>'SAMPLE 2',"fr"=>'SAMPLE 2',"de"=>'SAMPLE 2',"ru"=>'SAMPLE 2',"es"=>'SAMPLE 2',"tr"=>'SAMPLE 2',"vi"=>'SAMPLE 2',"mn"=>'SAMPLE 2',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>" /></node><node node_srl="87" parent_srl="0" menu_name_key='XEIcon' text="<?php if(true) { $_names = array("en"=>'Welcome Page',"ko"=>'Welcome Page',"jp"=>'Welcome Page',"zh-CN"=>'Welcome Page',"zh-TW"=>'Welcome Page',"fr"=>'Welcome Page',"de"=>'Welcome Page',"ru"=>'Welcome Page',"es"=>'Welcome Page',"tr"=>'Welcome Page',"vi"=>'Welcome Page',"mn"=>'Welcome Page',"en"=>'Board',"ko"=>'Board',"jp"=>'Board',"zh-CN"=>'Board',"zh-TW"=>'Board',"fr"=>'Board',"de"=>'Board',"ru"=>'Board',"es"=>'Board',"tr"=>'Board',"vi"=>'Board',"mn"=>'Board',"en"=>'XEIcon',"ko"=>'XEIcon',"jp"=>'XEIcon',"zh-CN"=>'XEIcon',"zh-TW"=>'XEIcon',"fr"=>'XEIcon',"de"=>'XEIcon',"ru"=>'XEIcon',"es"=>'XEIcon',"tr"=>'XEIcon',"vi"=>'XEIcon',"mn"=>'XEIcon',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>"><node node_srl="88" parent_srl="87" menu_name_key='SAMPLE 1' text="<?php if(true) { $_names = array("en"=>'SAMPLE 1',"ko"=>'SAMPLE 1',"jp"=>'SAMPLE 1',"zh-CN"=>'SAMPLE 1',"zh-TW"=>'SAMPLE 1',"fr"=>'SAMPLE 1',"de"=>'SAMPLE 1',"ru"=>'SAMPLE 1',"es"=>'SAMPLE 1',"tr"=>'SAMPLE 1',"vi"=>'SAMPLE 1',"mn"=>'SAMPLE 1',); print $_names[$lang_type]; }?>" url="<?php print(true?'#':"")?>" href="<?php print(true?'#':"")?>" is_shortcut='Y' desc='' open_window='N' expand='N' normal_btn='' hover_btn='' active_btn='' link="<?php if(true) {?><?php print $_names[$lang_type]; ?><?php }?>" /></node></root>