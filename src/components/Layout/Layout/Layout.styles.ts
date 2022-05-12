import { styled } from 'styles';

export const Page = styled('main', {
    backgroundColor: '$appBackground',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',

    margin: 'auto',
    width: '100%',

    '@lg': {
        width: '860px',
    },
});
