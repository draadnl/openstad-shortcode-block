<?php
/**
 * Plugin Name:       OpenStad - Shortcode block
 * Description:       Block for embedding OpenStad shortcodes
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Draad
 * Text Domain:       openstad
 *
 * @package OpenStad
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_openstad_shortcode_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_openstad_shortcode_block_init' );
