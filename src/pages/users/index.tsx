import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Pagination } from "../../components/Pagination/index";
import { Header } from "../../components/Header/Index";
import { Sidebar } from "../../components/Sidebar/Index";
import Link from "next/link";

export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size='lg' fontWeight="normal">Usuários</Heading>

                        <Link href="/users/create" passHref>
                            <Button
                            as="a"
                            size="sm"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                
                <Table colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                <Checkbox colorScheme="pink" />
                            </Th>
                            <Th>Usuário</Th>
                            { isWideVersion && <Th>Data de cadastro</Th>}
                            <Th width="8"></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Diego Soares</Text>
                                    <Text fontSize="sm" color="gray.300">as.diego@live.com</Text>
                                </Box>
                            </Td>
                            { isWideVersion && <Td>10 de Abril, 2021</Td> }
                            <Td>
                            <Button
                                as="a"
                                size="sm"
                                        bg="gray.700"
                                        _hover={{
                                            bg: 'gray.500'
                                        }}
                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                >
                                    Editar
                            </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Diego Soares</Text>
                                    <Text fontSize="sm" color="gray.300">as.diego@live.com</Text>
                                </Box>
                            </Td>
                            { isWideVersion && <Td>10 de Abril, 2021</Td> }
                            <Td>
                            <Button
                                as="a"
                                size="sm"
                                        bg="gray.700"
                                        _hover={{
                                            bg: 'gray.500'
                                        }}
                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                >
                                    Editar
                            </Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight="bold">Diego Soares</Text>
                                    <Text fontSize="sm" color="gray.300">as.diego@live.com</Text>
                                </Box>
                            </Td>
                            { isWideVersion && <Td>10 de Abril, 2021</Td> }
                            <Td>
                            <Button
                                as="a"
                                size="sm"
                                        bg="gray.700"
                                        _hover={{
                                            bg: 'gray.500'
                                        }}
                                leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                >
                                    Editar
                            </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Pagination />
                </Box>
            </Flex>
        </Box>
    );
}