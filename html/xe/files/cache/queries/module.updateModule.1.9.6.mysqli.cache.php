<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateModule");
$query->setAction("update");
$query->setPriority("");

${'module255_argument'} = new Argument('module', $args->{'module'});
${'module255_argument'}->checkNotNull();
if(!${'module255_argument'}->isValid()) return ${'module255_argument'}->getErrorMessage();
if(${'module255_argument'} !== null) ${'module255_argument'}->setColumnType('varchar');
if(isset($args->module_category_srl)) {
${'module_category_srl256_argument'} = new Argument('module_category_srl', $args->{'module_category_srl'});
if(!${'module_category_srl256_argument'}->isValid()) return ${'module_category_srl256_argument'}->getErrorMessage();
} else
${'module_category_srl256_argument'} = NULL;if(${'module_category_srl256_argument'} !== null) ${'module_category_srl256_argument'}->setColumnType('number');
if(isset($args->layout_srl)) {
${'layout_srl257_argument'} = new Argument('layout_srl', $args->{'layout_srl'});
if(!${'layout_srl257_argument'}->isValid()) return ${'layout_srl257_argument'}->getErrorMessage();
} else
${'layout_srl257_argument'} = NULL;if(${'layout_srl257_argument'} !== null) ${'layout_srl257_argument'}->setColumnType('number');
if(isset($args->skin)) {
${'skin258_argument'} = new Argument('skin', $args->{'skin'});
if(!${'skin258_argument'}->isValid()) return ${'skin258_argument'}->getErrorMessage();
} else
${'skin258_argument'} = NULL;if(${'skin258_argument'} !== null) ${'skin258_argument'}->setColumnType('varchar');

${'is_skin_fix259_argument'} = new Argument('is_skin_fix', $args->{'is_skin_fix'});
${'is_skin_fix259_argument'}->ensureDefaultValue('N');
if(!${'is_skin_fix259_argument'}->isValid()) return ${'is_skin_fix259_argument'}->getErrorMessage();
if(${'is_skin_fix259_argument'} !== null) ${'is_skin_fix259_argument'}->setColumnType('char');
if(isset($args->mskin)) {
${'mskin260_argument'} = new Argument('mskin', $args->{'mskin'});
if(!${'mskin260_argument'}->isValid()) return ${'mskin260_argument'}->getErrorMessage();
} else
${'mskin260_argument'} = NULL;if(${'mskin260_argument'} !== null) ${'mskin260_argument'}->setColumnType('varchar');

${'is_mskin_fix261_argument'} = new Argument('is_mskin_fix', $args->{'is_mskin_fix'});
${'is_mskin_fix261_argument'}->ensureDefaultValue('N');
if(!${'is_mskin_fix261_argument'}->isValid()) return ${'is_mskin_fix261_argument'}->getErrorMessage();
if(${'is_mskin_fix261_argument'} !== null) ${'is_mskin_fix261_argument'}->setColumnType('char');
if(isset($args->menu_srl)) {
${'menu_srl262_argument'} = new Argument('menu_srl', $args->{'menu_srl'});
${'menu_srl262_argument'}->checkFilter('number');
if(!${'menu_srl262_argument'}->isValid()) return ${'menu_srl262_argument'}->getErrorMessage();
} else
${'menu_srl262_argument'} = NULL;if(${'menu_srl262_argument'} !== null) ${'menu_srl262_argument'}->setColumnType('number');

${'mid263_argument'} = new Argument('mid', $args->{'mid'});
${'mid263_argument'}->checkNotNull();
if(!${'mid263_argument'}->isValid()) return ${'mid263_argument'}->getErrorMessage();
if(${'mid263_argument'} !== null) ${'mid263_argument'}->setColumnType('varchar');

${'browser_title264_argument'} = new Argument('browser_title', $args->{'browser_title'});
${'browser_title264_argument'}->checkNotNull();
if(!${'browser_title264_argument'}->isValid()) return ${'browser_title264_argument'}->getErrorMessage();
if(${'browser_title264_argument'} !== null) ${'browser_title264_argument'}->setColumnType('varchar');

${'description265_argument'} = new Argument('description', $args->{'description'});
${'description265_argument'}->ensureDefaultValue('');
if(!${'description265_argument'}->isValid()) return ${'description265_argument'}->getErrorMessage();
if(${'description265_argument'} !== null) ${'description265_argument'}->setColumnType('text');

${'is_default266_argument'} = new Argument('is_default', $args->{'is_default'});
${'is_default266_argument'}->ensureDefaultValue('N');
${'is_default266_argument'}->checkNotNull();
if(!${'is_default266_argument'}->isValid()) return ${'is_default266_argument'}->getErrorMessage();
if(${'is_default266_argument'} !== null) ${'is_default266_argument'}->setColumnType('char');
if(isset($args->content)) {
${'content267_argument'} = new Argument('content', $args->{'content'});
if(!${'content267_argument'}->isValid()) return ${'content267_argument'}->getErrorMessage();
} else
${'content267_argument'} = NULL;if(${'content267_argument'} !== null) ${'content267_argument'}->setColumnType('bigtext');
if(isset($args->mcontent)) {
${'mcontent268_argument'} = new Argument('mcontent', $args->{'mcontent'});
if(!${'mcontent268_argument'}->isValid()) return ${'mcontent268_argument'}->getErrorMessage();
} else
${'mcontent268_argument'} = NULL;if(${'mcontent268_argument'} !== null) ${'mcontent268_argument'}->setColumnType('bigtext');

${'open_rss269_argument'} = new Argument('open_rss', $args->{'open_rss'});
${'open_rss269_argument'}->ensureDefaultValue('Y');
${'open_rss269_argument'}->checkNotNull();
if(!${'open_rss269_argument'}->isValid()) return ${'open_rss269_argument'}->getErrorMessage();
if(${'open_rss269_argument'} !== null) ${'open_rss269_argument'}->setColumnType('char');

${'header_text270_argument'} = new Argument('header_text', $args->{'header_text'});
${'header_text270_argument'}->ensureDefaultValue('');
if(!${'header_text270_argument'}->isValid()) return ${'header_text270_argument'}->getErrorMessage();
if(${'header_text270_argument'} !== null) ${'header_text270_argument'}->setColumnType('text');

${'footer_text271_argument'} = new Argument('footer_text', $args->{'footer_text'});
${'footer_text271_argument'}->ensureDefaultValue('');
if(!${'footer_text271_argument'}->isValid()) return ${'footer_text271_argument'}->getErrorMessage();
if(${'footer_text271_argument'} !== null) ${'footer_text271_argument'}->setColumnType('text');
if(isset($args->mlayout_srl)) {
${'mlayout_srl272_argument'} = new Argument('mlayout_srl', $args->{'mlayout_srl'});
if(!${'mlayout_srl272_argument'}->isValid()) return ${'mlayout_srl272_argument'}->getErrorMessage();
} else
${'mlayout_srl272_argument'} = NULL;if(${'mlayout_srl272_argument'} !== null) ${'mlayout_srl272_argument'}->setColumnType('number');

${'use_mobile273_argument'} = new Argument('use_mobile', $args->{'use_mobile'});
${'use_mobile273_argument'}->ensureDefaultValue('N');
if(!${'use_mobile273_argument'}->isValid()) return ${'use_mobile273_argument'}->getErrorMessage();
if(${'use_mobile273_argument'} !== null) ${'use_mobile273_argument'}->setColumnType('char');

${'site_srl274_argument'} = new ConditionArgument('site_srl', $args->site_srl, 'equal');
${'site_srl274_argument'}->checkFilter('number');
${'site_srl274_argument'}->ensureDefaultValue('0');
${'site_srl274_argument'}->checkNotNull();
${'site_srl274_argument'}->createConditionValue();
if(!${'site_srl274_argument'}->isValid()) return ${'site_srl274_argument'}->getErrorMessage();
if(${'site_srl274_argument'} !== null) ${'site_srl274_argument'}->setColumnType('number');

${'module_srl275_argument'} = new ConditionArgument('module_srl', $args->module_srl, 'equal');
${'module_srl275_argument'}->checkFilter('number');
${'module_srl275_argument'}->checkNotNull();
${'module_srl275_argument'}->createConditionValue();
if(!${'module_srl275_argument'}->isValid()) return ${'module_srl275_argument'}->getErrorMessage();
if(${'module_srl275_argument'} !== null) ${'module_srl275_argument'}->setColumnType('number');

$query->setColumns(array(
new UpdateExpression('`module`', ${'module255_argument'})
,new UpdateExpression('`module_category_srl`', ${'module_category_srl256_argument'})
,new UpdateExpression('`layout_srl`', ${'layout_srl257_argument'})
,new UpdateExpression('`skin`', ${'skin258_argument'})
,new UpdateExpression('`is_skin_fix`', ${'is_skin_fix259_argument'})
,new UpdateExpression('`mskin`', ${'mskin260_argument'})
,new UpdateExpression('`is_mskin_fix`', ${'is_mskin_fix261_argument'})
,new UpdateExpression('`menu_srl`', ${'menu_srl262_argument'})
,new UpdateExpression('`mid`', ${'mid263_argument'})
,new UpdateExpression('`browser_title`', ${'browser_title264_argument'})
,new UpdateExpression('`description`', ${'description265_argument'})
,new UpdateExpression('`is_default`', ${'is_default266_argument'})
,new UpdateExpression('`content`', ${'content267_argument'})
,new UpdateExpression('`mcontent`', ${'mcontent268_argument'})
,new UpdateExpression('`open_rss`', ${'open_rss269_argument'})
,new UpdateExpression('`header_text`', ${'header_text270_argument'})
,new UpdateExpression('`footer_text`', ${'footer_text271_argument'})
,new UpdateExpression('`mlayout_srl`', ${'mlayout_srl272_argument'})
,new UpdateExpression('`use_mobile`', ${'use_mobile273_argument'})
));
$query->setTables(array(
new Table('`xe_modules`', '`modules`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`site_srl`',$site_srl274_argument,"equal")
,new ConditionWithArgument('`module_srl`',$module_srl275_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>