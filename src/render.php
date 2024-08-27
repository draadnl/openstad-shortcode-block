<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

if ( isset( $attributes['shortcode'] ) && !empty( $attributes['shortcode'] ) ) :
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo $attributes['shortcode']; ?>
</div>
<?php
endif;