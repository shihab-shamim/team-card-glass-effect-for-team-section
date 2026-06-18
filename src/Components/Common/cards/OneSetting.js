import { TextareaControl, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { updateData } from '../../../utils/functions';
import { IconLibrary, InlineDetailMediaUpload } from '../../../../../bpl-tools/Components';

const OneSetting = (props) => {
	const { attributes, setAttributes, index } = props;
	const { profiles, options = {} } = attributes || {};
	const item = profiles[index];
	const socials = item?.social || [];

	return (
		<div>
			<InlineDetailMediaUpload
				placeholder='https://...'
				label={__('Photo', 'team-section')}
				value={{ url: item?.image }}
				onChange={(value) =>
					setAttributes({ profiles: updateData(profiles, value.url, index, 'image') })
				}
			/>

			{options.showName && (
				<TextControl
					className='mt10'
					placeholder={__('Full name...', 'team-section')}
					label={__('Name', 'team-section')}
					value={item?.name || ''}
					onChange={(val) =>
						setAttributes({ profiles: updateData(profiles, val, index, 'name') })
					}
				/>
			)}

			{options.showDesignation && (
				<TextControl
					className='mt10'
					placeholder={__('Job title or role...', 'team-section')}
					label={__('Designation', 'team-section')}
					value={item?.designation || ''}
					onChange={(val) =>
						setAttributes({ profiles: updateData(profiles, val, index, 'designation') })
					}
				/>
			)}

			{options.showBio && (
				<TextareaControl
					className='mt10'
					rows={2}
					placeholder={__('Short bio or description...', 'team-section')}
					label={__('Bio', 'team-section')}
					value={item?.bio || ''}
					onChange={(val) =>
						setAttributes({ profiles: updateData(profiles, val, index, 'bio') })
					}
				/>
			)}

			{options.showButton && (
				<>
					<TextControl
						className='mt10'
						placeholder={__('Button text...', 'team-section')}
						label={__('Button Text', 'team-section')}
						value={item?.button?.text || ''}
						onChange={(val) =>
							setAttributes({ profiles: updateData(profiles, val, index, 'button', 'text') })
						}
					/>
					<TextControl
						className='mt10'
						placeholder='https://...'
						label={__('Button Link', 'team-section')}
						value={item?.button?.link || ''}
						onChange={(val) =>
							setAttributes({ profiles: updateData(profiles, val, index, 'button', 'link') })
						}
					/>
				</>
			)}

			{options.showSocial && (
				<div className='bpl-social-settings' style={{ marginTop: '20px' }}>
					<style>{`
						.bpl-social-icon-preview svg {
							width: 20px !important;
							height: 20px !important;
							fill: currentColor !important;
						}
					`}</style>
					<h4 style={{ marginBottom: '10px' }}>{__('Social Links', 'team-section')}</h4>

					{socials.map((socialItem, sIndex) => (
						<div
							key={sIndex}
							style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}
						>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
								<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
									<span
										className='bpl-social-icon-preview'
										dangerouslySetInnerHTML={{ __html: socialItem.icon || '' }}
										style={{ width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0', borderRadius: '4px', color: '#555' }}
									/>
									<IconLibrary
										label=' '
										onChange={(val) =>
											setAttributes({ profiles: updateData(profiles, val, index, 'social', sIndex, 'icon') })
										}
									/>
								</div>
								<Button
									icon='trash'
									isDestructive
									label={__('Remove Social Link', 'team-section')}
									onClick={() => {
										const newSocials = socials.filter((_, i) => i !== sIndex);
										setAttributes({ profiles: updateData(profiles, newSocials, index, 'social') });
									}}
								/>
							</div>
							<TextControl
								label={__('Link URL', 'team-section')}
								placeholder='https://...'
								value={socialItem.link || ''}
								onChange={(val) =>
									setAttributes({ profiles: updateData(profiles, val, index, 'social', sIndex, 'link') })
								}
							/>
						</div>
					))}

					<Button
						icon='plus'
						isSecondary
						onClick={() => {
							const newSocials = [
								...socials,
								{
									icon: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='currentColor'><path d='M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z'/></svg>",
									link: '#'
								}
							];
							setAttributes({ profiles: updateData(profiles, newSocials, index, 'social') });
						}}
						style={{ marginTop: '5px' }}
					>
						{__('Add Social Link', 'team-section')}
					</Button>
				</div>
			)}
		</div>
	);
};

export default OneSetting;
