import { Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


interface IconButtonProps {
    name: keyof typeof Ionicons.glyphMap;
    color: string;
    onPress: () => void;
}

export const IconButton = (props: IconButtonProps) => {
    const { name, color, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name={name} size={24} color={color} />
        </TouchableOpacity>
    );
}

