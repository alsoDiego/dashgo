import { Flex, Text, Box, Avatar} from '@chakra-ui/react';

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Diego Soares</Text>
                    <Text color="gray.300" fontSize="small">
                        as.diego@live.com
                    </Text>
                </Box>
            )}

            <Avatar
              size="md"
              name="Diego Soares"
              src="https://github.com/soares-ad.png" />
        </Flex>
    );
}