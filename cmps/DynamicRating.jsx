import { SelectRating } from "./dynamic-inputs/SelectRating.jsx"
import { StarsRating } from "./dynamic-inputs/StarsRating.jsx"
import { TextboxRating } from "./dynamic-inputs/TextboxRating.jsx"

export function DynamicRating(props) {
    switch (props.cmpType) {
        case 'select':
            return <SelectRating {...props} />
        case 'textbox':
            return <TextboxRating {...props} />
        case 'stars':
            return <StarsRating {...props} />
    }
}