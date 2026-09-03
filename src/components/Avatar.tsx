interface AvatarProps {
  imageUrl: string;
  name: string;
}

const Avatar = ({ imageUrl, name }: AvatarProps) => {
  return (
    <img
      src={imageUrl}
      alt={name}
      className="h-20 w-20 rounded-full object-cover"
    />
  );
};

export default Avatar;
