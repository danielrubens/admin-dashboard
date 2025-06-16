import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from '../components/Header';

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const initialValues = {
    EMR: "",
    EligbilitySystem: "",
    ClearingHouse: "",
    Vendor: "",
    GrossClaimsSubmitted: "",
    NetRevenueCollected: "",
    CurrentDenialRate: "",
    NumberOfMonthlyPatients: "",
  }

  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const userSchema = yup.object().shape({
    EMR: yup.string().required("required"),
    EligbilitySystem: yup.string().required("required"),
    ClearingHouse: yup.string().required("required"),
    Vendor: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    GrossClaimsSubmitted: yup.string().required("required"),
    NetRevenueCollected: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    CurrentDenialRate: yup.string().required("required"),
    NumberOfMonthlyPatients: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  })
  
  const handleFormSubmit = (values) => {
    console.log(values)
  }
  return (
    <Box m="20px">
        <Header title="Jorie's Data Points Request" subtitle="Please, include last 12 months of data" />
        <Formik 
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                         sx={{
                            "& > div": {
                                gridColumn: isNonMobile ? undefined : "span 4"
                            }
                         }}
                    >
                        <TextField fullWidth variant="filled" type="text" label="EMR" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.EMR} 
                                   name="EMR" error={!!touched.EMR && !!errors.EMR}
                                   helperText={touched.EMR && errors.EMR}
                                   sx={{ gridColumn: "span 2" }}
                                   />
                        <TextField fullWidth variant="filled" type="text" label="Eligbility System" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.EligbilitySystem} 
                                   name="EligbilitySystem" error={!!touched.EligbilitySystem && !!errors.EligbilitySystem}
                                   helperText={touched.EligbilitySystem && errors.EligbilitySystem}
                                   sx={{ gridColumn: "span 2" }}
                                   />
                        <TextField fullWidth variant="filled" type="text" label="Clearing House" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.ClearingHouse} 
                                   name="ClearingHouse" error={!!touched.ClearingHouse && !!errors.ClearingHouse}
                                   helperText={touched.ClearingHouse && errors.ClearingHouse}
                                   sx={{ gridColumn: "span 4" }}
                        />
                        <TextField fullWidth variant="filled" type="text" label="Vendor" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.Vendor} 
                                   name="Vendor" error={!!touched.Vendor && !!errors.Vendor}
                                   helperText={touched.Vendor && errors.Vendor}
                                   sx={{ gridColumn: "span 4" }}
                        />
                        <TextField fullWidth variant="filled" type="text" label="Gross Claims Submitted" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.GrossClaimsSubmitted} 
                                   name="GrossClaimsSubmitted" error={!!touched.GrossClaimsSubmitted && !!errors.GrossClaimsSubmitted}
                                   helperText={touched.GrossClaimsSubmitted && errors.GrossClaimsSubmitted}
                                   sx={{ gridColumn: "span 4" }}
                        />
                          <TextField fullWidth variant="filled" type="text" label="Net Revenue Collected" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.NetRevenueCollected} 
                                   name="NetRevenueCollected" error={!!touched.NetRevenueCollected && !!errors.NetRevenueCollected}
                                   helperText={touched.NetRevenueCollected && errors.NetRevenueCollected}
                                   sx={{ gridColumn: "span 4" }}
                        />
                        <TextField fullWidth variant="filled" type="text" label="Current Denial Rate" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.CurrentDenialRate} 
                                   name="CurrentDenialRate" error={!!touched.CurrentDenialRate && !!errors.CurrentDenialRate}
                                   helperText={touched.CurrentDenialRate && errors.CurrentDenialRate}
                                   sx={{ gridColumn: "span 4" }}  
                        />
                        <TextField fullWidth variant="filled" type="text" label="Number of Monthly Patients" 
                                   onBlur={handleBlur} onChange={handleChange} value={values.NumberOfMonthlyPatients} 
                                   name="NumberOfMonthlyPatients" error={!!touched.NumberOfMonthlyPatients && !!errors.NumberOfMonthlyPatients}
                                   helperText={touched.NumberOfMonthlyPatients && errors.NumberOfMonthlyPatients}
                                   sx={{ gridColumn: "span 4" }}
                                   />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">Submit Data Points
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>
  )
}

export default Form