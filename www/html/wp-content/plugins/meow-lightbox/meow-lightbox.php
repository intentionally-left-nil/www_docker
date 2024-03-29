<?php
/*
Plugin Name: Meow Lightbox
Plugin URI: https://meowapps.com/plugin/meow-lightbox
Bitbucket Plugin URI: https://bitbucket.org/meowapps/meow-lightbox/
Description: Lightbox designed by and for photographers.
Version: 3.2.2
Author: Jordy Meow, Thomas KIM
Author URI: https://meowapps.com
Text Domain: meow-lightbox
Domain Path: /languages
*/

if ( !defined( 'MWL_VERSION' ) ) {
  define( 'MWL_VERSION', '3.2.2' );
  define( 'MWL_PREFIX', 'mwl' );
  define( 'MWL_DOMAIN', ' meow-lightbox' );
  define( 'MWL_ENTRY', __FILE__ );
  define( 'MWL_PATH', dirname( __FILE__ ) );
  define( 'MWL_URL', plugin_dir_url( __FILE__ ) );
}

require_once( 'classes/init.php');

?>
