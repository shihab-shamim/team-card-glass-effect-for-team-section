import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	__experimentalUnitControl as UnitControl
} from '@wordpress/components';
import { Background, BoxControl, ColorControl, Device, Label, ShadowControl, Typography } from '../../../../../../bpl-tools/Components';
import { updateData } from '../../../../utils/functions';
import { imageFitOptions, textAlignOptions } from '../../../../utils/options';

const Style = ({ attributes, setAttributes, device }) => {
	const { styles = {}, options = {} } = attributes;

	return (
		<>
			{/* ── Container ─────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Container', 'team-section')} initialOpen={false}>
				<Background
					label={__('Background', 'team-section')}
					value={styles?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bg') })}
				/>

				<PanelRow>
					<Label>{__('Padding', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<BoxControl
					values={styles?.padding?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'padding', device) })}
				/>

				<PanelRow>
					<Label>{__('Margin', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<BoxControl
					values={styles?.margin?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'margin', device) })}
				/>
			</PanelBody>

			{/* ── Card ──────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Card', 'team-section')} initialOpen={false}>
				<Background
					label={__('Background', 'team-section')}
					value={styles?.card?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'bg') })}
				/>

				<PanelRow>
					<Label>{__('Max Width', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<UnitControl
					value={styles?.card?.maxWidth?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'maxWidth', device) })}
				/>

				<PanelRow>
					<Label>{__('Height', 'team-section')}</Label>
					<Device />
				</PanelRow>
				<UnitControl
					value={styles?.card?.height?.[device]}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'height', device) })}
				/>

				<BoxControl
					className='mt15'
					label={__('Border Radius', 'team-section')}
					values={styles?.card?.radius}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'radius') })}
				/>

				<UnitControl
					className='mt15'
					label={__('Border Width', 'team-section')}
					value={styles?.card?.border?.width}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'border', 'width') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Border Color', 'team-section')}
					value={styles?.card?.border?.color}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'border', 'color') })}
				/>

				<ShadowControl
					className='mt15'
					label={__('Box Shadow', 'team-section')}
					value={styles?.card?.shadow}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'shadow') })}
				/>
				<ShadowControl
					className='mt15'
					label={__('Hover Box Shadow', 'team-section')}
					value={styles?.card?.hoverShadow}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'card', 'hoverShadow') })}
				/>
			</PanelBody>

			{/* ── Image ─────────────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Image', 'team-section')} initialOpen={false}>
				<SelectControl
					label={__('Image Fit', 'team-section')}
					value={styles?.image?.imageFit}
					options={imageFitOptions}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'image', 'imageFit') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Hover Zoom', 'team-section')}
					value={styles?.image?.hoverScale}
					min={1}
					max={2}
					step={0.01}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'image', 'hoverScale') })}
				/>
			</PanelBody>

			{/* ── Glass Effect ──────────────────────────────────── */}
			<PanelBody className='bPlPanelBody' title={__('Glass Effect', 'team-section')} initialOpen={false}>
				<Background
					label={__('Glass Background', 'team-section')}
					value={styles?.glass?.bg}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'glass', 'bg') })}
				/>
				<RangeControl
					className='mt15'
					label={__('Backdrop Blur (px)', 'team-section')}
					value={styles?.glass?.blur}
					min={0}
					max={50}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'glass', 'blur') })}
				/>
				<UnitControl
					className='mt15'
					label={__('Overlay Height', 'team-section')}
					value={styles?.glass?.height}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'glass', 'height') })}
				/>
				<BoxControl
					className='mt15'
					label={__('Padding', 'team-section')}
					values={styles?.glass?.padding}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'glass', 'padding') })}
				/>
				<ColorControl
					className='mt10'
					label={__('Border Color', 'team-section')}
					value={styles?.glass?.borderColor}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'glass', 'borderColor') })}
				/>
				<SelectControl
					className='mt15'
					label={__('Text Align', 'team-section')}
					value={styles?.glass?.textAlign}
					options={textAlignOptions}
					onChange={(v) => setAttributes({ styles: updateData(styles, v, 'glass', 'textAlign') })}
				/>
			</PanelBody>

			{/* ── Name ──────────────────────────────────────────── */}
			{options.showName && (
				<PanelBody className='bPlPanelBody' title={__('Name', 'team-section')} initialOpen={false}>
					<ColorControl
						label={__('Color', 'team-section')}
						value={styles?.name?.color}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'color') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Margin', 'team-section')}
						values={styles?.name?.margin}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'margin') })}
					/>
					<Typography
						className='mt15'
						label={__('Typography', 'team-section')}
						value={styles?.name?.typo}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'name', 'typo') })}
					/>
				</PanelBody>
			)}

			{/* ── Designation ───────────────────────────────────── */}
			{options.showDesignation && (
				<PanelBody className='bPlPanelBody' title={__('Designation', 'team-section')} initialOpen={false}>
					<ColorControl
						label={__('Color', 'team-section')}
						value={styles?.designation?.color}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'color') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Margin', 'team-section')}
						values={styles?.designation?.margin}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'margin') })}
					/>
					<Typography
						className='mt15'
						label={__('Typography', 'team-section')}
						value={styles?.designation?.typo}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'designation', 'typo') })}
					/>
				</PanelBody>
			)}

			{/* ── Bio ───────────────────────────────────────────── */}
			{options.showBio && (
				<PanelBody className='bPlPanelBody' title={__('Bio', 'team-section')} initialOpen={false}>
					<ColorControl
						label={__('Color', 'team-section')}
						value={styles?.bio?.color}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'color') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Margin', 'team-section')}
						values={styles?.bio?.margin}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'margin') })}
					/>
					<Typography
						className='mt15'
						label={__('Typography', 'team-section')}
						value={styles?.bio?.typo}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'bio', 'typo') })}
					/>
				</PanelBody>
			)}

			{/* ── Social Icons ──────────────────────────────────── */}
			{options.showSocial && (
				<PanelBody className='bPlPanelBody' title={__('Social Icons', 'team-section')} initialOpen={false}>
					<ColorControl
						label={__('Color', 'team-section')}
						value={styles?.social?.iconColor}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconColor') })}
					/>
					<ColorControl
						className='mt10'
						label={__('Hover Color', 'team-section')}
						value={styles?.social?.iconHoverColor}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconHoverColor') })}
					/>
					<ColorControl
						className='mt10'
						label={__('Background', 'team-section')}
						value={styles?.social?.iconBg}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconBg') })}
					/>
					<ColorControl
						className='mt10'
						label={__('Hover Background', 'team-section')}
						value={styles?.social?.iconHoverBg}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconHoverBg') })}
					/>
					<RangeControl
						className='mt15'
						label={__('Icon Size (px)', 'team-section')}
						value={styles?.social?.iconSize}
						min={8}
						max={40}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'iconSize') })}
					/>
					<UnitControl
						className='mt15'
						label={__('Button Size', 'team-section')}
						value={styles?.social?.btnSize}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'btnSize') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Button Radius', 'team-section')}
						values={styles?.social?.btnRadius}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'btnRadius') })}
					/>
					<RangeControl
						className='mt15'
						label={__('Gap Between Icons (px)', 'team-section')}
						value={styles?.social?.gap}
						min={0}
						max={60}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'gap') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Margin', 'team-section')}
						values={styles?.social?.margin}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'social', 'margin') })}
					/>
				</PanelBody>
			)}

			{/* ── CTA Button ────────────────────────────────────── */}
			{options.showButton && (
				<PanelBody className='bPlPanelBody' title={__('CTA Button', 'team-section')} initialOpen={false}>
					<ColorControl
						label={__('Text Color', 'team-section')}
						value={styles?.button?.color}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'color') })}
					/>
					<ColorControl
						className='mt10'
						label={__('Hover Text Color', 'team-section')}
						value={styles?.button?.hoverColor}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'hoverColor') })}
					/>
					<Background
						label={__('Background', 'team-section')}
						value={styles?.button?.bg}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'bg') })}
					/>
					<Background
						label={__('Hover Background', 'team-section')}
						value={styles?.button?.hoverBg}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'hoverBg') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Padding', 'team-section')}
						values={styles?.button?.padding}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'padding') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Border Radius', 'team-section')}
						values={styles?.button?.radius}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'radius') })}
					/>
					<BoxControl
						className='mt15'
						label={__('Margin', 'team-section')}
						values={styles?.button?.margin}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'margin') })}
					/>
					<Typography
						className='mt15'
						label={__('Typography', 'team-section')}
						value={styles?.button?.typo}
						onChange={(v) => setAttributes({ styles: updateData(styles, v, 'button', 'typo') })}
					/>
				</PanelBody>
			)}
		</>
	);
};

export default Style;
