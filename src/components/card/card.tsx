import { default as StorybookCard, CardProps as SbCardProps } from '@utd-argo/ux-master-library/components/card/Card';

export type CardProps = SbCardProps & {
    title?: string;
    titleBar?: React.ReactNode;
    value: string | React.ReactNode;
    metric: string | React.ReactNode;
};

const Card = ({ title, titleBar, value, metric, ...props }: CardProps) => {
    return (
        <StorybookCard title={title} titleBar={titleBar} {...props}>
            <h2>{value}</h2>
            <span>{metric}</span>
        </StorybookCard>
    );
};

export default Card;