import React from 'react'

// LineComponent.tsx
type DecoProps = {
  type: string // deco 태그의 css 클래스명
  spanCount: number // span의 개수
}

type LineDecoProps = {
  lineType: string // line 태그의 css 클래스명
  items: Array<{ text?: string; deco: DecoProps[] }> // 라인의 구성 요소
}

export const LineDeco = ({ lineType, items }: LineDecoProps) => {
  return (
    <div className={`line ${lineType}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.text && <div>{item.text}</div>}
          {item.deco.map((deco, decoIndex) => (
            <div key={decoIndex} className={`deco ${deco.type}`}>
              {Array.from({ length: deco.spanCount }).map((_, spanIndex) => (
                <span key={spanIndex}></span>
              ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
