<?php

/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="info-wrapper">
		<?php wp_nav_menu(array('theme_location' => 'primary', 'menu_id' => 'primary-menu')); ?>
		<div class="site-info">
			<p>Brought to you by <a href="<?php echo esc_url('https://www.redacademy.com/'); ?>"><?php printf(esc_html('%s'), 'RED Academy'); ?></a></p>
		</div><!-- .site-info -->
	</div>
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>