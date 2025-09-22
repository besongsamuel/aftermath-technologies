import { Email, LinkedIn, Phone } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n";
import theme from "./theme";

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <title>{t("meta.title")}</title>
          <meta name="description" content={t("meta.description")} />
          <meta name="keywords" content={t("meta.keywords")} />
          <meta property="og:title" content={t("meta.title")} />
          <meta property="og:description" content={t("meta.description")} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={t("meta.title")} />
          <meta name="twitter:description" content={t("meta.description")} />
          <link rel="canonical" href="https://aftermathtechnologies.com" />
        </Helmet>

        <AppBar position="fixed" elevation={0}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
            >
              {t("company.name")}
            </Typography>
            <LanguageSwitcher />
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ pt: 8 }}>
          {/* Hero Section */}
          <Container maxWidth="md" sx={{ py: 16, textAlign: "center" }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ mb: 3 }}>
              {t("company.name")}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: 600, mx: "auto" }}
            >
              {t("company.tagline")}
            </Typography>
          </Container>

          {/* Company Story Section */}
          <Box sx={{ bgcolor: "grey.50", py: 12 }}>
            <Container maxWidth="md">
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                textAlign="center"
                sx={{ mb: 4 }}
              >
                {t("company.story.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.25rem",
                  lineHeight: 1.8,
                  textAlign: "center",
                  maxWidth: 800,
                  mx: "auto",
                }}
              >
                {t("company.story.content")}
              </Typography>
            </Container>
          </Box>

          {/* Services Section */}
          <Container maxWidth="lg" sx={{ py: 12 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              textAlign="center"
              sx={{ mb: 2 }}
            >
              {t("services.title")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="center"
              sx={{ mb: 8, fontSize: "1.25rem", maxWidth: 600, mx: "auto" }}
            >
              {t("services.subtitle")}
            </Typography>
            <Stack spacing={4} sx={{ maxWidth: 900, mx: "auto" }}>
              {t("services.items", { returnObjects: true }).map(
                (service: any, index: number) => (
                  <Card key={index} elevation={0} sx={{ p: 0 }}>
                    <CardContent sx={{ p: 6 }}>
                      <Typography
                        variant="h4"
                        component="h3"
                        gutterBottom
                        sx={{ mb: 3 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: "1.125rem", lineHeight: 1.7 }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                )
              )}
            </Stack>
          </Container>

          {/* Clients Section */}
          <Box sx={{ bgcolor: "grey.50", py: 12 }}>
            <Container maxWidth="md">
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                textAlign="center"
                sx={{ mb: 2 }}
              >
                {t("clients.title")}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 4, fontSize: "1.25rem" }}
              >
                {t("clients.subtitle")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{
                  mb: 8,
                  fontSize: "1rem",
                  fontStyle: "italic",
                  opacity: 0.8,
                }}
              >
                {t("clients.note")}
              </Typography>
              <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                flexWrap="wrap"
                sx={{ gap: 3 }}
              >
                <Button
                  variant="outlined"
                  component={Link}
                  href="https://www.rendasua.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 140, py: 1.5, fontSize: "1rem" }}
                >
                  RendaSua
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  href="https://www.groupe-bt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 140, py: 1.5, fontSize: "1rem" }}
                >
                  Groupe B&T
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  href="https://www.mokumbi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ minWidth: 140, py: 1.5, fontSize: "1rem" }}
                >
                  Mokumbi
                </Button>
              </Stack>
            </Container>
          </Box>

          {/* About Section */}
          <Container maxWidth="md" sx={{ py: 12 }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              textAlign="center"
              sx={{ mb: 4 }}
            >
              {t("about.title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.25rem",
                lineHeight: 1.8,
                textAlign: "center",
                mb: 6,
                maxWidth: 800,
                mx: "auto",
              }}
            >
              {t("about.content")}
            </Typography>
            <Box textAlign="center">
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                component={Link}
                href="https://www.linkedin.com/in/samuel-b-84088633/"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{ py: 1.5, px: 4, fontSize: "1rem" }}
              >
                {t("about.linkedinText")}
              </Button>
            </Box>
          </Container>

          {/* Contact Section */}
          <Box sx={{ bgcolor: "grey.50", py: 12 }}>
            <Container maxWidth="md">
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                textAlign="center"
                sx={{ mb: 2 }}
              >
                {t("contact.title")}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 8, fontSize: "1.25rem" }}
              >
                {t("contact.subtitle")}
              </Typography>
              <Stack spacing={6} alignItems="center">
                <Stack
                  direction="row"
                  spacing={4}
                  alignItems="center"
                  sx={{
                    bgcolor: "white",
                    p: 4,
                    borderRadius: 3,
                    boxShadow: "0 2px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <IconButton
                    component={Link}
                    href={`mailto:${t("contact.email")}`}
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      "&:hover": { bgcolor: "#333333" },
                      width: 56,
                      height: 56,
                    }}
                  >
                    <Email />
                  </IconButton>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      Email
                    </Typography>
                    <Link
                      href={`mailto:${t("contact.email")}`}
                      color="primary"
                      sx={{ fontSize: "1.125rem", textDecoration: "none" }}
                    >
                      {t("contact.email")}
                    </Link>
                  </Box>
                </Stack>
                <Stack
                  direction="row"
                  spacing={4}
                  alignItems="center"
                  sx={{
                    bgcolor: "white",
                    p: 4,
                    borderRadius: 3,
                    boxShadow: "0 2px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  <IconButton
                    component={Link}
                    href={`tel:${t("contact.phone")}`}
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      "&:hover": { bgcolor: "#333333" },
                      width: 56,
                      height: 56,
                    }}
                  >
                    <Phone />
                  </IconButton>
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 0.5 }}
                    >
                      Phone
                    </Typography>
                    <Link
                      href={`tel:${t("contact.phone")}`}
                      color="primary"
                      sx={{ fontSize: "1.125rem", textDecoration: "none" }}
                    >
                      {t("contact.phone")}
                    </Link>
                  </Box>
                </Stack>
              </Stack>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
                sx={{ mt: 6, fontSize: "1.125rem" }}
              >
                {t("contact.message")}
              </Typography>
            </Container>
          </Box>
        </Box>

        <Divider />
        <Box component="footer" sx={{ py: 4, textAlign: "center" }}>
          <Container maxWidth="md">
            <Typography variant="body2" color="text.secondary">
              © 2024 {t("company.name")}. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
