<?php
/**
 * Plugin Name: Team Card Glass Effect
 * Description:Team card glass effect is a WordPress plugin that allows you to create team card glass effect on your website.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:team-section
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'TSEC_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'TSEC_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'TSEC_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'TSECPlugin' ) ){
	class TSECPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new TSECPlugin();
}