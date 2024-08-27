/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

const openstadIcon = (
	<svg width="24" height="24" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M7.38462 0.666666C7.38462 0.298476 7.1091 0 6.76923 0H1.84615L1.78324 0.00344105C1.47293 0.037581 1.23077 0.321488 1.23077 0.666666L1.2303 2H0.615379C0.275512 2 0 2.29848 0 2.66667V29.3333C0 29.7015 0.275512 30 0.615379 30H31.3846C31.7245 30 32 29.7015 32 29.3333V2.66667C32 2.29848 31.7245 2 31.3846 2H30.7688L30.7692 0.666666C30.7692 0.298476 30.4937 0 30.1538 0H25.2308L25.1679 0.00344105C24.8575 0.037581 24.6154 0.321488 24.6154 0.666666L24.6149 2H19.0765L19.0769 0.666666C19.0769 0.298476 18.8014 0 18.4615 0H13.5385L13.4755 0.00344105C13.1652 0.037581 12.9231 0.321488 12.9231 0.666666L12.9226 2H7.38414L7.38462 0.666666ZM24.076 12.2788L14.508 22.1486C14.1831 22.4838 13.6563 22.4838 13.3314 22.1486L7.92336 16.57C7.59846 16.2348 7.59846 15.6914 7.92336 15.3563L9.09997 14.1425C9.42492 13.8074 9.95172 13.8074 10.2766 14.1425L13.9197 17.9005L21.7228 9.85137C22.0477 9.51618 22.5745 9.51623 22.8994 9.85137L24.076 11.0651C24.4009 11.4002 24.4009 11.9437 24.076 12.2788Z" fill="#12B886" />
	</svg>
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	*/
	icon: openstadIcon,
	edit: Edit,
} );
