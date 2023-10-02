import {
    Box,
    Button,
    Card, CardBody, CardFooter,
    CardHeader, Grid,
    grommet,
    Grommet,
    Header,
    Heading,
    Page,
    PageContent,
    PageHeader, Paragraph, ResponsiveContext,
    Text
} from "grommet";
import {useContext, useState} from "react";
import {Moon, Sun} from "grommet-icons";
import {deepMerge} from "grommet/utils";

const theme = deepMerge(grommet, {
    global: {
        colors: {
            brand: "#228BE6"
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
});

const AppBar = (props) => (
    <Header
        background="brand"
        pad={{left: "medium", right: "small", vertical: "small"}}
        elevation="medium"
        {...props}
    />
);

const CardTemplate = ({title}) => {
    const size = useContext(ResponsiveContext);

    return (
        <Card>
            <CardHeader pad={"medium"}>
                <Heading level={2} margin={"none"}>
                    {title}
                </Heading>
            </CardHeader>
            <CardBody pad={"medium"}>
                <Paragraph maxLines={size === "small" ? 3 : undefined}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor non nulla ac vehicula.
                    Aliquam erat volutpat. Mauris auctor faucibus est at mattis. Aliquam a enim ac nisi aliquam
                    consectetur et ac velit. Mauris ut imperdiet libero.
                </Paragraph>
            </CardBody>
            <CardFooter pad={"medium"} background={"background-contrast"}>
                Footer
            </CardFooter>
        </Card>
    );
};

function App() {
    const [dark, setDark] = useState(false);

    return (
        <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
            <Page>
                <AppBar>
                    <Text size="large">My Grommet App</Text>
                    <Button
                        a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        icon={dark ? <Moon/> : <Sun/>}
                        onClick={() => setDark(!dark)}
                        tip={{
                            content: (
                                <Box
                                    pad="small"
                                    round="small"
                                    background={dark ? "dark-1" : "light-3"}
                                >
                                    {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                                </Box>
                            ),
                            plain: true
                        }}
                    />
                </AppBar>
                <PageContent>
                    <PageHeader title={"Welcome to Grommet!"}/>
                    <Grid columns={"medium"} gap={"large"} pad={{bottom: "large"}}>
                        <CardTemplate title={"Card 1"}/>
                        <CardTemplate title={"Card 2"}/>
                        <CardTemplate title={"Card 3"}/>
                    </Grid>
                </PageContent>
            </Page>
        </Grommet>
    );
}

export default App;
