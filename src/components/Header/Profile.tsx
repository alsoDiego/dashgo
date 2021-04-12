import { Flex, Text, Box, Avatar} from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Diego Soares</Text>
                <Text color="gray.300" fontSize="small">
                    as.diego@live.com
                </Text>
            </Box>

            <Avatar
              size="md"
              name="Diego Soares"
              src="https://github.com/soares-ad.png" />
        </Flex>
    );
}