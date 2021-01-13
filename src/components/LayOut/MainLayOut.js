import AuthLayOut from './AuthLayOut';

function MainLayout(props) {
  const { children } = props;
  return (
    <div className="MainLayout">
      <AuthLayOut />
      <div className="main-content">
        {children}
      </div>
    </div>
  )
};

export default MainLayout;
