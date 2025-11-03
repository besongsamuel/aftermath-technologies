import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newLanguage: string | null
  ) => {
    if (newLanguage !== null) {
      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={i18n.language}
        exclusive
        onChange={handleLanguageChange}
        size="small"
        sx={{
          backgroundColor: "transparent",
          gap: 1,
          "& .MuiToggleButton-root": {
            border: "1px solid #E0E0E0",
            color: "#666666",
            fontSize: "0.875rem",
            fontWeight: 500,
            padding: "6px 16px",
            minWidth: "auto",
            borderRadius: 8,
            "&.Mui-selected": {
              backgroundColor: "#000000",
              color: "#ffffff",
              borderColor: "#000000",
              "&:hover": {
                backgroundColor: "#000000",
              },
            },
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
          },
        }}
      >
        <ToggleButton value="en" aria-label={t("language.english")}>
          EN
        </ToggleButton>
        <ToggleButton value="fr" aria-label={t("language.french")}>
          FR
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
