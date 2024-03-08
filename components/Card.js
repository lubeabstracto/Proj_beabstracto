import PropTypes from 'prop-types';

function Card({ title, linkText, description, LinkIconComponent, href }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md max-w-md mx-auto relative">
      {/* Icon in the top right corner */}
      {LinkIconComponent && (
        <div className="absolute top-4 right-4">
          <LinkIconComponent className="h-10 w-10 text-blue-600" aria-hidden="true" />
        </div>
      )}
      
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      {/* Link and text */}
      <a href={href} className="inline-block mt-2 text-brand-tertiary hover:text-blue-500">
        <span className="text-md">{linkText}</span>
      </a>
      <p className="mt-4 text-sm text-gray-500">{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  LinkIconComponent: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
};

export default Card;
