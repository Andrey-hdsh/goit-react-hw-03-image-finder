import { LoadMoreButton } from "./loadMoreButton.styled"

export const Button = ({click}) => {
    return (
        <LoadMoreButton onClick={click}>Load more</LoadMoreButton>
    )
}