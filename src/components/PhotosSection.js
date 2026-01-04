export const PhotosSection = () => {
  const photos = [
    {
      src: 'https://via.placeholder.com/400x250/1e40af/ffffff?text=Training+Building',
      alt: 'A.D.G. pic',
      title: 'ADG',
      description: 'Messages of ADG'
    },
    {
      src: 'https://via.placeholder.com/400x250/059669/ffffff?text=Forensic+Lab',
      alt: 'DTS pic',
      title: 'DTS Director',
      description: 'DTS Director message'
    },
    {
      src: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Hostel+Facility',
      alt: 'Person 3 pic',
      title: 'Person 3',
      description: 'Person 3 message'
    }
  ];

  return (
    <section className="photos-section" aria-labelledby="photos-heading">
      <div className="photos-grid">
        {photos.map((photo, idx) => (
          <div key={idx} className="photo-card">
            <img src={photo.src} alt={photo.alt} />
            <div className="photo-card-content">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};