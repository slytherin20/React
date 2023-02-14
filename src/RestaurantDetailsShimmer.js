export default function RestaurantDetailsShimmer() {
  return (
    <div className="rest-shimmer-menu">
      <div className="rest-shimmer-overview">
        <div className="rest-shimmer-img"></div>
        <div className="rest-shimmer-desc">
          <p className="rest-shimmer-name"></p>
          <p className="rest-shimmer-p"></p>
          <p className="rest-shimmer-p"></p>
        </div>
      </div>
      <div className="menu-shimmer-list">
        {[1, 1, 1, 1, 1, 1, 1].map((el, index) => (
          <div className="menu-shimmer-item" key={index}>
            <div className="menuitem-shimmer-desc">
              <p className="rest-shimmer-h3"></p>
              <p className="rest-shimmer-p"></p>
              <p className="rest-shimmer-p"></p>
            </div>
            <div className="menuitem-shimmer-img"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
