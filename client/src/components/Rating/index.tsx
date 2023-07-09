import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

import { RatingContainer } from './styles'

export function Rating() {
  const rating = 5
  const integerRate = Math.floor(rating)
  const remainingRate = 5 - Math.ceil(rating)

  const filledStars = []
  for (let index = 0; index < integerRate; index++) {
    filledStars.push(<BsStarFill />)
  }

  const emptyStars = []
  for (let index = 0; index < remainingRate; index++) {
    emptyStars.push(<BsStar />)
  }

  const halfStar = rating % 1 !== 0

  return (
    <RatingContainer>
      {...filledStars}
      {halfStar && <BsStarHalf />}
      {...emptyStars}
    </RatingContainer>
  )
}
