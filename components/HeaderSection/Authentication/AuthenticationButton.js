import Color from '@/data/color.json';

const options = ['Sign Up', 'Log In'];
function AuthenticationButton() {
  return (
    <div className="flex gap-2">
      {options.map((item, index) => {
        return (
          <button
            key={index}
            style={
              index === 0
                ? {
                    backgroundColor: Color['secondary-color'],
                    border: 'none',
                    color: Color['text-primary'],
                  }
                : {
                    backgroundColor: Color['background-color'],
                    border: `1px solid ${Color['primary-color']}`,
                    color: Color['text-secondary'],
                  }
            }
            className="px-6 py-2 text-base font-medium"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default AuthenticationButton;
