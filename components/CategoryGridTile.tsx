import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native"; // we dont need this hook here but it helps for navigating from component that is not registered as screen

interface CategoryGridTileProps {
    title: string;
    color: string;
    onSelect: () => void;
}

export const CategoryGridTile = (props: CategoryGridTileProps) => {
    // const navigation = useNavigation();

    const { title, color, onSelect } = props;
    return <View style={styles.outerContainer}>
        <Pressable 
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onSelect}   
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.26,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
        backgroundColor: "white",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    }
});