
type Props = {
    width: string,
    height: string,
    alt: string
}

const Preloader = ({ width, alt, height }: Props) => {
    return (
        <img src="/tail-spin.svg" alt={alt} width={width} height={height} className="my-8"/>
    );
}

export default Preloader;