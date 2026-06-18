import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, RangeControl, ToggleControl } from '@wordpress/components';
import { Device, ItemsPanel, Label } from '../../../../../../bpl-tools/Components';
import OneSetting from '../../../Common/cards/OneSetting';

const General = ({ attributes, setAttributes, device }) => {
	const { profiles = [], options = {}, styles = {} } = attributes || {};

	const newProfile = {
		name: `Team Member ${profiles.length + 1}`,
		designation: 'Creative Designer',
		bio: 'Short description about this team member.',
		image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
		button: { text: 'Read More', link: '#' },
		social: [
			{
				icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z'/></svg>",
				link: '#'
			},
			{
				icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634A9.935 9.935 0 0 0 24 4.557z'/></svg>",
				link: '#'
			},
			{
				icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.523c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.99 1.523 4.088 4.088 0 0 1-1.523.99c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.523-.99 4.088 4.088 0 0 1-.99-1.523c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .99-1.523 4.088 4.088 0 0 1 1.523-.99c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.261 2.151.558 2.913a5.876 5.876 0 0 0 1.384 2.126A5.876 5.876 0 0 0 4.14 23.37c.762.297 1.635.5 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.151-.261 2.913-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.762.5-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.261-2.151-.558-2.913a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63c-.762-.297-1.635-.5-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'/></svg>",
				link: '#'
			}
		]
	};

	return (
		<>
			<PanelBody
				className='bPlPanelBody'
				title={__('Team Members', 'team-section')}
				initialOpen={true}
			>
				<ItemsPanel
					newItem={newProfile}
					design='sortable'
					attributes={attributes}
					setAttributes={setAttributes}
					arrKey='profiles'
					itemLabel={__('Member', 'team-section')}
					ItemSettings={OneSetting}
				/>
			</PanelBody>

			<PanelBody
				className='bPlPanelBody'
				title={__('Layout', 'team-section')}
				initialOpen={false}
			>
				<PanelRow>
					<Label>{__('Columns', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<RangeControl
					value={styles?.columns?.[device]}
					min={1}
					max={6}
					onChange={(val) => setAttributes({ styles: { ...styles, columns: { ...styles.columns, [device]: val } } })}
				/>

				<RangeControl
					label={__('Column Gap (px)', 'team-section')}
					value={styles?.columnGap}
					min={0}
					max={200}
					onChange={(val) => setAttributes({ styles: { ...styles, columnGap: val } })}
				/>

				<RangeControl
					label={__('Row Gap (px)', 'team-section')}
					value={styles?.rowGap}
					min={0}
					max={200}
					onChange={(val) => setAttributes({ styles: { ...styles, rowGap: val } })}
				/>
			</PanelBody>

			<PanelBody
				className='bPlPanelBody'
				title={__('Elements', 'team-section')}
				initialOpen={false}
			>
				<ToggleControl
					className='mt10'
					label={__('Show Name', 'team-section')}
					checked={options.showName}
					onChange={(val) => setAttributes({ options: { ...options, showName: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show Designation', 'team-section')}
					checked={options.showDesignation}
					onChange={(val) => setAttributes({ options: { ...options, showDesignation: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show Bio', 'team-section')}
					checked={options.showBio}
					onChange={(val) => setAttributes({ options: { ...options, showBio: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show Social Links', 'team-section')}
					checked={options.showSocial}
					onChange={(val) => setAttributes({ options: { ...options, showSocial: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Show CTA Button', 'team-section')}
					checked={options.showButton}
					onChange={(val) => setAttributes({ options: { ...options, showButton: val } })}
				/>
				<ToggleControl
					className='mt10'
					label={__('Open Links in New Tab', 'team-section')}
					checked={options.openInNewTab}
					onChange={(val) => setAttributes({ options: { ...options, openInNewTab: val } })}
				/>
			</PanelBody>
		</>
	);
};

export default General;
