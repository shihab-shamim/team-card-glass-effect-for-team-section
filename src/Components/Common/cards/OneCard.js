const normalizeIconColor = (svgString) => {
	if (!svgString) return svgString;
	return svgString
		.replace(/fill\s*=\s*["'][^"']*["']/gi, 'fill="currentColor"')
		.replace(/(<svg[^>]*)(>)/i, (match, p1, p2) => {
			if (!p1.includes('fill=')) {
				return p1 + ' fill="currentColor"' + p2;
			}
			return match;
		});
};

export const OneCard = ({ attributes, Richtext, setAttributes }) => {
	const {
		profiles = [],
		options = { showName: true, showDesignation: true, showBio: false, showSocial: true, showButton: false, openInNewTab: true }
	} = attributes || {};

	return (
		<section className='tsb_tcge-team-section'>
			<div className='tsb_tcge-team-wrapper'>
				{profiles.map((profile, index) => (
					<div className='tsb_tcge-member-card' key={index}>
						<div className='tsb_tcge-member-image'>
							{profile.image
								? <img src={profile.image} alt={profile.name || ''} />
								: <div className='tsb_tcge-img-placeholder' />
							}
						</div>

						<div className='tsb_tcge-glass-overlay'>
							<div className='tsb_tcge-member-info'>
								{options.showName && profile.name && !Richtext && <h3 className='tsb_tcge-name' dangerouslySetInnerHTML={{ __html: profile.name }} />}

								{options.showName && Richtext && <Richtext tagName="h3" value={profile.name} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, name: value } : p) })} className='tsb_tcge-name' placeholder="Enter name" />}

								{options.showDesignation && profile.designation && !Richtext && <p className='tsb_tcge-designation' dangerouslySetInnerHTML={{ __html: profile.designation }} />}

								{options.showDesignation && Richtext && <Richtext tagName="p" value={profile.designation} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, designation: value } : p) })} className='tsb_tcge-designation' placeholder="Enter designation" />}

								{options.showBio && profile.bio && !Richtext && <p className='tsb_tcge-bio' dangerouslySetInnerHTML={{ __html: profile.bio }} />}

								{options.showBio && Richtext && <Richtext tagName="p" value={profile.bio} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, bio: value } : p) })} className='tsb_tcge-bio' placeholder="Enter bio" />}
							</div>

							{options.showSocial && profile.social?.length > 0 && (
								<ul className='tsb_tcge-social-links'>
									{profile.social.map((item, sIndex) => (
										<li key={sIndex} style={{ '--i': sIndex + 1 }}>
											<a
												href={item.link || '#'}
												target={options.openInNewTab ? '_blank' : '_self'}
												rel={options.openInNewTab ? 'noopener noreferrer' : ''}
												aria-label={profile.name}
												dangerouslySetInnerHTML={{ __html: normalizeIconColor(item.icon) }}
											/>
										</li>
									))}
								</ul>
							)}

							{options.showButton && profile.button?.text && !Richtext && (
								<a
									className='tsb_tcge-button'
									href={profile.button.link || '#'}
									target={options.openInNewTab ? '_blank' : '_self'}
									rel={options.openInNewTab ? 'noopener noreferrer' : ''}
									dangerouslySetInnerHTML={{ __html: profile.button.text }}
								/>
							)}

							{options.showButton && Richtext && <Richtext tagName="span" value={profile.button?.text} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, button: { ...p.button, text: value } } : p) })} className='tsb_tcge-button' placeholder="Button text" />}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default OneCard;
