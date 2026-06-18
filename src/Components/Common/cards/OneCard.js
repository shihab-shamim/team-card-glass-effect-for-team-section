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

export const OneCard = ({ attributes }) => {
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
								{options.showName && profile.name && (
									<h3 className='tsb_tcge-name'>{profile.name}</h3>
								)}

								{options.showDesignation && profile.designation && (
									<p className='tsb_tcge-designation'>{profile.designation}</p>
								)}

								{options.showBio && profile.bio && (
									<p className='tsb_tcge-bio'>{profile.bio}</p>
								)}
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

							{options.showButton && profile.button?.text && (
								<a
									className='tsb_tcge-button'
									href={profile.button.link || '#'}
									target={options.openInNewTab ? '_blank' : '_self'}
									rel={options.openInNewTab ? 'noopener noreferrer' : ''}
								>
									{profile.button.text}
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default OneCard;
