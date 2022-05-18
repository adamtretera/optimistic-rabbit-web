import { PillContainerStyled } from './PillContainer.styles';
import { Pill } from '../Pill';

export interface PillContainerProps {
    recipe: Recipe;
}

interface Recipe {
    time: number;
    difficulty: string;
    taste: string;
    media: string;
}

export const PillContainer = ({ recipe }: PillContainerProps) => {
    const tags = [`${recipe.time} minutes`, recipe.difficulty, recipe.taste, recipe.media];

    return (
        <PillContainerStyled>
            {tags.map((tag, index) => (
                <Pill key={index}>{tag}</Pill>
            ))}
        </PillContainerStyled>
    );
};
