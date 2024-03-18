type Props = {
    content: string,
    addingStyles?: string,
}

const AuthButton = ({ content, addingStyles }: Props) =>  {
    return (
        <div className={"cursor-pointer rounded-full border-white py-2 transition-all duration-300 active:scale-90 " + addingStyles}>
            {content}
        </div>
    );
}

export default AuthButton;