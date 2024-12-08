type BannerItemType = {
  text: string
  icon: string
}

type RollingBannerPropsType = {
  items: BannerItemType[]
  direction: 'left' | 'right'
}

export const RollingBanner = ({ items, direction }: RollingBannerPropsType) => {
  return (
    <div className={`banner_line ${direction}`}>
      <div className="roller_wrap">
        {['original', 'clone'].map((el, idx) => (
          <div
            key={`rolloer-${el}`}
            id={`roller${idx + 1}_${el}`}
            className={`rolling_list ${el}`}
          >
            {items.map((item, index) => (
              <div key={`${direction}-${index}`}>
                <p>{item.text}</p>
                <img src={item.icon} alt={`icon${idx}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
