import { Email, LinkedIn, Phone } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
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

        <Box component="main" sx={{ pt: { xs: 6, sm: 7, md: 8 } }}>
          {/* Hero Section */}
          <Container
            maxWidth="md"
            sx={{ py: { xs: 8, sm: 12, md: 16 }, textAlign: "center" }}
          >
            <Avatar
              src="/me.JPG"
              alt="Samuel Besong"
              sx={{
                width: { xs: 200, sm: 280, md: 350 },
                height: { xs: 200, sm: 280, md: 350 },
                mx: "auto",
                mb: 4,
                border: { xs: "4px solid", sm: "6px solid", md: "8px solid" },
                borderColor: "primary.main",
                boxShadow: {
                  xs: "0 8px 24px rgba(0, 0, 0, 0.12)",
                  sm: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  md: "0 16px 48px rgba(0, 0, 0, 0.18)",
                },
                "& img": {
                  objectPosition: "center 35%",
                  objectFit: "cover",
                },
              }}
            />
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
          <Container maxWidth="lg" sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
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
              sx={{
                mb: { xs: 4, sm: 6, md: 8 },
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                maxWidth: 600,
                mx: "auto",
              }}
            >
              {t("services.subtitle")}
            </Typography>
            <Stack spacing={4} sx={{ maxWidth: 900, mx: "auto" }}>
              {t("services.items", { returnObjects: true }).map(
                (service: any, index: number) => (
                  <Card key={index} elevation={0} sx={{ p: 0 }}>
                    <CardContent sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
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
          <Box sx={{ bgcolor: "grey.50", py: { xs: 6, sm: 8, md: 12 } }}>
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
                sx={{
                  mb: 4,
                  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                }}
              >
                {t("clients.subtitle")}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{
                  mb: { xs: 4, sm: 6, md: 8 },
                  fontSize: "1rem",
                  fontStyle: "italic",
                  opacity: 0.8,
                }}
              >
                {t("clients.note")}
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 4 }}
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
                  sx={{
                    minWidth: 140,
                    py: 2,
                    fontSize: "1rem",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <img
                    src="https://www.rendasua.com/rendasua.21759575615cbb470800734bda375a2f.svg"
                    alt="RendaSua"
                    style={{ width: "100%", height: "auto", maxHeight: 60 }}
                  />
                  RendaSua
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  href="https://www.groupe-bt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 140,
                    py: 2,
                    fontSize: "1rem",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <img
                    src="https://biz.groupe-bt.com/assets/bnt-9e9a09f37ec0326dda99.png"
                    alt="Groupe B&T"
                    style={{ width: "100%", height: "auto", maxHeight: 60 }}
                  />
                  Groupe B&T
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  href="https://www.mokumbi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 140,
                    py: 2,
                    fontSize: "1rem",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <img
                    src="https://www.mokumbi.com/site-logo-1200x1200.png"
                    alt="Mokumbi"
                    style={{ width: "100%", height: "auto", maxHeight: 60 }}
                  />
                  Mokumbi
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  href="https://www.boresha.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 140,
                    py: 2,
                    fontSize: "1rem",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <img
                    src="https://www.boresha.ca/Logo%20-%20Boresha-2.png"
                    alt="Boresha"
                    style={{ width: "100%", height: "auto", maxHeight: 60 }}
                  />
                  Boresha
                </Button>
              </Stack>
            </Container>
          </Box>

          {/* About Section */}
          <Container maxWidth="md" sx={{ py: { xs: 6, sm: 8, md: 12 } }}>
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
                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                lineHeight: 1.8,
                textAlign: "center",
                mb: { xs: 4, sm: 5, md: 6 },
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
          <Box sx={{ bgcolor: "grey.50", py: { xs: 6, sm: 8, md: 12 } }}>
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
                sx={{
                  mb: { xs: 4, sm: 6, md: 8 },
                  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                }}
              >
                {t("contact.subtitle")}
              </Typography>
              <Stack spacing={{ xs: 4, sm: 5, md: 6 }} alignItems="center">
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
