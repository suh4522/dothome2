<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'suh45222');

/** MySQL database username */
define('DB_USER', 'suh45222');

/** MySQL database password */
define('DB_PASSWORD', 'tmtis12a');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'P +z1;$Qha<(T]*eR[%UQO<##(t@$szKDOR^WYhkLAw;Wov8ipBepXqz)HM%5fwQ');
define('SECURE_AUTH_KEY',  'L^ <2J.a8PX>M>*#T!IMa^ny*zs~s}8g)es.vuW8B9;E0T8ZNvMtL0nYp<c}^`qI');
define('LOGGED_IN_KEY',    '+xsL/I7)47-o_wrjw>L!vzMm{5]i4KcR!k0,r>62wL^FtdF- WjT*jZW4Lpf0tM1');
define('NONCE_KEY',        'X;&6E=]!cP`>c;Y=vtvP52%V.+(t1#;5T.ddH Z}HMYe06!DOi]/ :*Ht ) U-3Q');
define('AUTH_SALT',        'gft_w4yL/S;i`N+:)EC{knX4QpOKhM4/~j6KEDPC )xPz>QD@bMI[Qc8jo3I#CK$');
define('SECURE_AUTH_SALT', 'EM%0,ex6A9,96rqNhBX,mfCpcbL&!]30g0,2X^FIxq&1x]Q}b6oKp@`{g_c<)1S@');
define('LOGGED_IN_SALT',   'GMq_,q}/wMLfd)g=6_:u_P805m-/Pqb>(JR8~%}W~M`zeI4#m%2,LW_z*,,a9b@^');
define('NONCE_SALT',       '4,/{|Bz*Xksw*M#Epz71|h5Z9wm-. #uz_z8[ gPAyP1s{tZEcw, [ISoYz.JV_D');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
