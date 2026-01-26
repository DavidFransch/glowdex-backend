import { CellContext, TYPOLOGY_5_LABELS } from '../contexts/types';

// Placeholder for the full Sievers et al. (2021) paper context.
// In a real deployment, this would contain relevant excerpts from the paper.
export const SIEVERS_PAPER_CONTEXT = `
Ecological Indicators 131 (2021) 108141
Contents lists available at ScienceDirect
Ecological Indicators
journal homepage: www.elsevier.com/locate/ecolind
Original Articles
Global typologies of coastal wetland status to inform conservation
and management
Michael Sievers, Christopher J. Brown, Christina A. Buelow, Ryan M. Pearson, Mischa
P. Turschwella, Maria Fernanda Adame, Laura Griffiths, Briana Holgate, Thomas S. Rayner,
Vivitskaia J.D. Tulloch, Mahua Roy Chowdhury, Philine S.E. zu Ermgassen, Shing Yip Lee,
Ana I. Lillebø, Brendan Mackey, Paul S. Maxwell, Anusha Rajkaran, Ana I. Sousa, Rod
M. Connolly
Coastal and Marine Research Centre, Australian Rivers Institute, School of Environment and Science, Griffith University, Gold Coast, QLD 4222, Australia
Department of Forest and Conservation Science, University of British Columbia, BC, Canada
Department of Marine Science, University of Calcutta, Kolkata 700 019, India
Changing Oceans Group, School of Geosciences, University of Edinburgh, James Hutton Rd, King's Buildings, Edinburgh EH9 3FE, United Kingdom
Simon F S Li Marine Science Laboratory, The Chinese University of Hong Kong, Shatin, Hong Kong SAR, China
CESAM, Centre for Environmental and Marine Studies, Department of Biology, University of Aveiro, Campus Universitário de Santiago, 3810-193, Aveiro, Portugal
Griffith Climate Action Beacon, Griffith University, Gold Coast, 4222, Queensland, Australia
Alluvium Consulting Australia, 14/36 Agnes St, Fortitude Valley, QLD 4006, Australia
Department of Biodiversity and Conservation Biology, University of the Western Cape, Private Bag X17, Bellville, Cape Town, South Africa
ARTICLE INFO
Keywords:
Bioregion
Cumulative impacts
Environmental management
Global conservation
Human pressures
Health index
ABSTRACT
Global-scale conservation initiatives and policy instruments rely on ecosystem indicators to track progress to-
wards targets and objectives. A deeper understanding of indicator interrelationships would benefit these efforts
and help characterize ecosystem status. We study interrelationships among 34 indicators for mangroves, salt-
marsh, and seagrass ecosystems, and develop data-driven, spatially explicit typologies of coastal wetland status
at a global scale. After accounting for environmental covariates and gap-filling missing data, we obtained two
levels of clustering at 5 and 18 typologies, providing outputs at different scales for different end users. We
generated 2,845 cells (1° (lat) × 1° (long)) globally, of which 29.7% were characterized by high land- and
marine-based impacts and a high proportion of threatened species, 13.5% by high climate-based impacts, and
9.6% were refuges with lower impacts, high fish density and a low proportion of threatened species. We identify
instances where specific actions could have positive outcomes for coastal wetlands across regions facing similar
issues. For example, land- and marine-based threats to coastal wetlands were associated with ecological structure
and function indicators, suggesting that reducing these threats may reduce habitat degradation and threats to
species persistence. However, a interdimensional relationships might be affected by temporal or spatial
mismatches in data. Weak relationships mean that global biodiversity maps that categorize areas by single in-
dicators (such as threats or trends in habitat size) may not be representative of changes in other indicators (e.g.,
ecosystem function). By simplifying the complex global mosaic of coastal wetland status and identifying regions
with similar issues that could benefit from knowledge exchange across national boundaries, we help set the scene
for globally and regionally coordinated conservation.
1. Introduction
The natural world is under enormous pressure from human activities
(Newbold et al., 2016; Mammides 2020), with coastal zones at the
interface of marine and terrestrial environments at considerable risk (He
and Silliman 2019). There is an urgent need to limit and reverse habitat
loss and degradation to enhance biodiversity, safeguard human liveli-
hoods, slow climate change, and to define pathways to ocean sustainable
* Corresponding author.
E-mail address: m.sievers@griffith.edu.au (M. Sievers).
https://doi.org/10.1016/j.ecolind.2021.108141
Received 19 May 2021; Received in revised form 11 August 2021; Accepted 21 August 2021
Available online 27 August 2021
1470-160X/© 2021 Published by Elsevier Ltd. This is an open access article under the CC BY-NC-ND license (http://creativecommons.org/licenses/by-nc-nd/4.0/).
development (Díaz et al., 2019). Large-scale initiatives and international
policy instruments have been developed to help achieve these aspira-
tions, such as the RAMSAR Convention on Wetlands, the UN Decade of
Ecosystem Restoration, the UN Decade of Ocean Science for Sustainable
Development, and the Convention on Biological Diversity's (CBD) Post-
2020 Global Biodiversity Framework and Sustainable Development
Goals (SDG) (Leal Filho et al., 2018; Davidson et al., 2019; CBD 2020;
UN 2020). Nested within the SDGs are targets that provide tangible
aspirations that will help achieve each goal, and indicators that track
progress towards achieving targets (Waldron et al., 2013; Watson et al.,
2020). The targets are interrelated, such that conservation actions that
make progress on one are also likely to advance others. Expanding the
protected area network, for instance, can also prevent the extinction of
imperiled species, and enhance ecosystem services through reducing
pollution (Kearney et al., 2018; Lindenmayer et al., 2018).
Opportunities to progress multiple interrelated targets should be
reflected as the existence of underlying relationships among the in-
dicators used to evaluate ecosystem status. But investigations into in-
terrelationships at the global scale are lacking. Quantifying
interrelationships for example among indicators of pressures (e.g.,
fishing), ecological functions (e.g., fish productivity) and habitat loss – is
thus an important step in identifying opportunities for conservation
actions to have benefits for improving multiple targets. Existing indices
of ecosystem status often assume these causal relationships exist (e.g.,
wilderness areas; Jones et al., 2018) or infer them from expert opinion
(e.g., the Ocean Health Index (OHI); Halpern et al., 2007; Halpern et al.,
2012). This is not a criticism of these well-designed and fit-for-purpose
indices, but we acknowledge that intuitive causal relationships may not
exist across large spatial scales, potentially affecting the conclusions
drawn. For instance, the loss of mangrove forests is only weakly asso-
ciated with cumulative impacts, and the effects of pressures vary by
national governance (Turschwell et al., 2020). Relationships among
different groups of cumulative impacts (i.e., a consequence of multiple
pressures) can also be weak at the global scale (e.g., climate change and
pollution from difuse sources; Bowler et al., 2020). Studying in-
terrelationships among a diverse suite of ecological indicators can
confirm the validity of methods that assume indicator relationships,
evaluate expert opinion used to quantify these relationships, be used to
develop spatially explicit typologies of condition (sensu bio-
regionalizations; Mackey et al., 2008; Woolley et al., 2020), and help set
the scene for coordinated conservation actions that share information
across regions facing similar issues.
Vegetated coastal wetlands - mangroves, saltmarsh, and seagrass
provide a valuable framework for exploring interrelationships among
global indicators and identifying typologies to inform globally coordi-
nated conservation actions. Coastal wetlands provide multiple
ecosystem services, including protecting coastlines from storms
(Menéndez et al., 2020), reducing the amount of pollutants entering the
marine environment (Adame et al., 2019), sequestering large amounts of
carbon, contributing to climate change mitigation (Duarte et al., 2013),
and providing critical habitat for wildlife, including fisheries species and
endangered megafauna (Carrasquilla-Henao and Juanes, 2017; Sievers
et al., 2019; Unsworth et al., 2019b). Despite this, coastal wetlands have
experienced global declines in extent and condition (Waycott et al.,
2009; Davidson 2014; Gu et al., 2018), and are susceptible to cumulative
land, marine and climate pressures, such as sea-level rise and eutro-
phication (Cloern et al., 2016; Schuerch et al., 2018; He and Silliman
2019; Tulloch et al., 2020). Coastal wetlands are also under-represented
in global monitoring programs and indices of status and trends (Milo-
slavich et al., 2018; Brown et al., 2021), and receive less conservation
funding than other coastal habitats, such as coral reefs (Duarte et al.,
2008; Unsworth et al., 2019a). Increased awareness of these issues has
spurred calls to enhance coastal wetland conservation action at the
global scale (Cullen-Unsworth and Unsworth 2018; Friess et al., 2019;
de los Santos et al., 2020). Several wetland indicators track change in
individual ecosystem components (e.g., habitat extent change or animal
population size; Loh et al., 2005; Darrah et al., 2019) and a suite of
globally-applicable datasets now exist for coastal wetland status in-
dicators (Worthington et al., 2020).
Globally and regionally coordinated conservation would benefit
from a deeper understanding of the interrelationships among key in-
dicators of ecosystem status that are widely used to track progress to-
wards various objectives and targets. Using coastal wetland ecosystems,
we aimed to: (1) quantify interrelationships among 34 indicators
relating to habitat extent change, ecological structure and function, and
cumulative impacts for coastal wetlands globally, and (2) define com-
binations of indicator values that characterize relative status in different
coastal wetland areas, or 'spatially explicit typologies'. Typologies thus
reflect ecosystem status based on our indicators of interest (not de-
lineations of global wetland types or distributions) and can inform co-
ordinated conservation actions across regions facing similar issues.
2. Materials and methods
We explored interrelationships among ecosystem indicators of
coastal wetlands and identified typologies of condition through nine key
steps (Fig. 1). Our approach brings together ideas and concepts across
disciplines, such as analyzing socio-ecological patterns of vulnerability
(Kok et al., 2016), spatial correlations of global pressures (Bowler et al.,
2020), and data-driven bioregionalizations (Woolley et al., 2020).
2.1. Indicator selection
We selected indicators based upon a review of relevant literature,
existing indices, conceptual models of ecosystem processes, and data
availability for mangrove, saltmarsh, and seagrass ecosystems. What we
refer to as indicators, could also be considered measures, metrics, or in-
dexes, however, we do not make this distinction and used indicators
throughout. We compiled indicators that described ecosystem status
under three thematic dimensions: habitat extent change (changes in the
areal extent of the habitats), ecological structure and function (biotic
indicators relating to the ecology of the ecosystem), and pressures
('cumulative impacts' based on Halpern et al., 2019) (see Table 1). We
selected indicators which had globally, or near-globally, comprehensive
datasets for a total of 34 ecosystem-specific indicators (Table 1; for full
description, see Appendix A). Our modelling approach is not hindered
by the inclusion of correlated indicators; in fact, these enhance capacity
to accurately gap-fill missing data and help identify spatially explicit
typologies.
In addition to indicators that describe status, we also collated data on
variables that describe site characteristics (hereafter "covariates";
Table 1). These covariates naturally influence some of the indicators,
such as tidal range and sea-surface temperature. Their inclusion means
we could remove variation in indicators that were hypothesized to be
due to environmental variation or the size of habitats. Therefore, the
diagnoses of coastal wetland condition more closely reflect human in-
fluences. For those indicators hypothesized to be influenced by the
covariates, we included seven covariates in the statistical model
(Table 1; also see 'Statistical analysis'). We did not apply covariates to all
indicators. If we include covariates in the responses of indicators that we
do not expect them to explain, we risk removing variability due to
spurious correlations.
2.2. Grid cells and variable measurement
We generated a grid of 1° (lat) × 1° (long) polygon cells (100 × 100
km at the equator), that included the distribution of mangrove, seagrass,
and saltmarsh vegetation extent. To do this, the grid was spatially joined
with vector shapefiles of the extent of mangrove (overall accuracy of
94.0%; Bunting et al., 2018), seagrass (UNEP-WCMC, 2017) and salt-
marsh (Mcowen et al., 2017), and filtered to exclude polygons and
points where these habitats were missing, resulting in 2,845 grid cells.
We acknowledge the saltmarsh and seagrass layers are not always ac-
curate at the local scale. However, the spatial resolution of our analysis
accommodates the coarseness of the global data sets and are suitable for
the global overview and proof of concept of our analyses.
We calculated the mean value for each indicator and covariate with
globally comprehensive datasets, except for fragmentation indicators
which were measured at the landscape level (i.e., each grid cell is the
landscape boundary for which fragmentation is estimated; see Appendix
A for a full description of indicator processing). For indicators that were
not globally comprehensive (e.g., seagrass extent loss), we calculated
mean values only for cells where data existed. Missing data due to the
lack of congruence between habitat distribution and indicator data was
rare (see Appendix A for full documentation of missing data for each
indicator). We did not undertake any gap-filling of missing data prior to
analysis because our statistical approach imputes missing data based on
correlations amongst indicators to gap-fill during analysis. We used
multivariate imputation with chained equations (MICE) to estimate
plausible values when cells had missing data for covariates (Appendix
B).
Cumulative impacts to mangrove, saltmarsh and seagrass habitats
were calculated from 14 global pressure layers from (Halpern et al.,
2019) (1 km² resolution; Appendix C). We rasterized spatial data layers
(vector; polygon) mapping each habitat's global distribution to 1 km²
resolution (hereafter referred to as "habitat extent" rasters). To quantify
the impact of individual pressures to each habitat, pressure rasters (re-
scaled from 0 to 1, Appendix A) were multiplied by habitat extent rasters
and a value representing the vulnerability of each habitat to each
pressure (Halpern et al., 2019). The pressure impact rasters were then
summed within driver origin (land- (n = 3), marine- (n = 8), or climate-
based (n = 3); Tulloch et al., 2020) to obtain cumulative pressure impact
rasters for each habitat-driver combination for each habitat (hereafter,
cumulative impacts) and averaged to obtain a value for each grid cell in
the years 2003 and 2013 (Appendix C). Values from 2013 were
considered current cumulative impacts and change in cumulative
impacts was calculated as the instantaneous rate of change between
2003 and 2013.
Spatial data layers for mangrove and saltmarsh pressure indicators
required additional processing (without doing so, 88% of mangroves
and 85% of saltmarsh would not have corresponding data). In brief, we
processed the global pressure data (Halpern et al., 2019) to extend
landwards, so cumulative impacts could be quantified for all habitat
extent. To assess and map cumulative impacts to these intertidal areas,
we first calculated average pressure impacts at river mouths and then
assigned river mouth pressure impacts to mangroves and saltmarshes in
corresponding upstream basins (see Appendix C). Although direct im-
pacts from some of these pressures might not be expected in intertidal
areas (e.g., from fishing), indirect effects to the ecosystem from them are
possible (e.g., water quality and trophic cascades).
Spatial processing and indicator measurement were conducted in
ArcGIS Pro (v 2.5.0, ESRI Inc.) using the Geostatistical Analyst toolbox,
or R (v 3.6.1, R Development Core Team, 2017) using the spatial
packages 'raster' (Hijmans 2019), 'sp' (Pebesma and Bivand 2005;
Bivand et al., 2013), and 'sf' (Pebesma 2016). Multivariate imputation
was performed using the R package 'mice' (Van Buuren and Groothuis-
Oudshoorn 2011).
2.3. Statistical analysis
2.3.1. Residual indicator values
We modelled relationships among indicators with a latent variable
model (LVM). We use a Bayesian LVM framework due to several ad-
vantages. First, it enabled us to model the effects of covariates on in-
dicators. The LVM models covariation in indicators due to natural
environmental gradients and separates that from residual covariation
among indicators that is not explained by the covariates. This residual
covariation is of primary interest because it could be due to human in-
fluences. Second, Bayesian LVMs can model missing data by predicting
missing indicator values based on the strength of their correlations with
other indicators. Third, Bayesian LVMs can model different indicator
types simultaneously, including continuous, proportional, and categor-
ical data. The model was specified with the following equation (1) (Hui
2016):
log(μ) =θο; + x + 20;
where uij is the mean response at cell i for indicator j, doj is the indicator-
specific intercept, xi and zį are vectors of the covariates (where used) and
LVs (respectively), and ẞ; and 0; are their corresponding indicator-
specific coefficients (Hui 2016). We estimated coefficients for each in-
dicator from likelihoods appropriate to their distribution with Markov
Chain Monte Carlo (MCMC) sampling (Hui 2016); a normal distribution
(with identity link) for continuous response variables, and a beta dis-
tribution (with logit link) for proportions. To obtain the residual indi-
cator values at each cell, we multiplied the matrix of indicator
coefficients for each LV by the matrix of cell LV scores.
We set the length of each MCMC chain to 20,000, discarded 1,000 in
the burn-in period, and used a thinning rate of 2. We used weakly
informative normal priors (mean = 0 and variance = 10) for MCMC
estimation of variable coefficients (Hui 2018) and did not include site
effects. We explored the results of a range of LVs (from 2 to 30) and
found that higher LV models produced more compact and separated
clusters (i.e., typologies). Given the high dimensionality of our dataset
(34 indicators and 2,845 cells), we chose to include the maximum
number of LVs that was computationally feasible (17 LVs). The use of 17
LVs, rather than just 2-3 LVs typical of most ordinations, means that we
could capture the strongest correlations and the subtle patterns.
We log-transformed variables in the LVM where necessary to meet
assumptions of normality and homogeneity of variance, and standard-
ized (z-score standardization, mean = 0, standard deviation = 1) co-
variate and response variables (excluding proportions). We verified
MCMC chain convergence by visually inspecting trace plots and calcu-
lating Geweke convergence diagnostics after adjusting for multiple
comparisons (Geweke 1992). We also visually inspected autocorrelation
plots and used Dunn-Smyth residuals to check model assumptions (Ap-
pendix D; Dunn and Smyth 1996). We fit the LV model using the R-
package 'boral' version 1.81 (Bayesian ordination and regression anal-
ysis; Hui 2016; Hui 2018).
2.3.2. Quantifying indicator correlations
Correlations among variables will determine the typologies detected
by the clustering algorithms clusters. Where correlations represent an
ecological interrelationship, they also suggest opportunities for conser-
vation to simultaneously enhance multiple indicators. We estimated
'residual correlations' from the LVM, which are 'residual correlations'
left-over, after accounting for spatial covariation in indicator values that
represent covariance left-over after explaining for the covariates (Hui
2016).
The large number of potential correlations increases the risk of
falsely identifying correlations as real interrelationships. We therefore
took several steps to avoid falsely interpreting spurious correlations as
causal. First, we only interpreted correlations where the 99% Bayesian
credible interval did not overlap zero. Second, we identified indicators
a-priori that shared similar underlying data sources, which we expected
to be correlated (e.g., cumulative impacts for different habitat types).
Third, we focus our interpretation of casual relationships on relation-
ships identified a-priori (O'Connor et al., 2015). Finally, we assumed
that any strong correlations that could not be anticipated a-priori are
suggestive of new hypotheses that could be tested, and we refrained
from making causal interpretations of them.
2.3.3. Classifying cells into typologies
We used k-medoid cluster analysis to group cells according to their
residual indicator values. To partition cells, k-medoid cluster analysis
identifies data points with low dissimilarity to others (i.e., the medoids)
and assigns nearby observations to form clusters around the medoid data
points. The k-medoid method is less sensitive to outliers than the
alternative k-means clustering method, which clusters observations
around means rather than medoids (Kaufman and Rousseeuw 2009). К-
medoid cluster analysis requires the number of clusters (k) to be speci-
fied a-priori. The statistically optimal number of clusters in the data can
be identified using the average silhouette width. This is a measure of
how similar an observation is to its designated cluster in comparison to
others (Rousseeuw 1987), with high average silhouette width for a
clustering configuration indicating tightly clustered observations
(Rousseeuw 1987).
While the number of clusters, and thus typologies, can be a subjective
decision that depends on the purpose of the analysis and the end user
needs, there are benefits of utilizing a fully data-driven approach to
guide selection cluster numbers (e.g., choosing the k that produces the
greatest silhouette width). We used a balance between fully data-driven
and subjectively constrained. We constrained the clustering to be be-
tween 5 and 50, as fewer than 5 global typologies are uninformative for
our purposes, and more than 50 are too complex. We subsequently
identified separate peaks in silhouette width at 5 and 18 clusters (Ap-
pendix E) and explored these two outputs. We then performed k-medoid
cluster analysis on a Euclidean distance matrix of residual indicator
values at each cell using the partitioning around medoids clustering
algorithm (Kaufman and Rousseeuw 2009). We produced a three-
dimensional plot indicating the relative position of the clusters in
ordination space and used an RGB color palette for the three axes to
color the typologies. The three-dimensional ordinations enable the
similarities among typologies to be mapped geographically. Cluster
analysis was performed using the R package 'cluster' (Maechler et al.,
2019).
We considered uncertainty in clustering by re-running the cluster
analysis across the full posterior conditional distribution of residual
values and calculating a robustness statistic. The robustness statistic
represents the consistency that pairs of cells were classified in the same
or different typologies (Appendix F).
2.3.4. Diagnosing typologies
To diagnose typologies, we interrogate boxplots of residuals, which
show the spread of indicator values within each typology. Residuals
reflect indicator values relative to the mean value expected for a cell
once covariate effects are removed. By setting a statistical quantitative
metric to serve as a threshold, we can identify indicators most useful for
diagnosing the distinguishing features of the typologies. We demon-
strate the use of quantile thresholds below by using 75th and 95th
thresholds for the 5-typology and 18-typology outputs, respectively.
Although all three habitats are not present in every cell, our
modeling approach gap-fills for missing data across all indicators, so the
indicators used to diagnose typologies can be associated with an
ecosystem type that is outside its bioclimatic range at some cells. While
this outcome can be counterintuitive, the method is deliberately
designed to remove bioclimatic patterns through the covariates,
enabling us to examine residual patterns in indicator values. Because the
habitat types do frequently co-occur, we considered this slight inter-
pretation challenge to be better than modelling wetland types individ-
ually, which would reduce the model's power to detect shared trends
across habitat types. To avoid illogical diagnoses, we only interpret in-
dicators for wetlands that are present at a particular cell.
3. Results
3.1. Interrelationships among ecosystem indicators
We identified interrelationships among the 34 indicators (Fig. 2).
Given the size and complexity of the correlation matrix for 34 indicators,
we focus here on several key interrelationships (for more comprehensive
descriptions, see Appendix G). There were mostly negative, though
weak, relationships between marine- and land-based cumulative im-
pacts and ecological structure and function indicators (Fig. 2). For
example, seagrass-affiliated species were more likely to be threatened
with extinction in cells with higher seagrass marine-based cumulative
impacts; saltmarsh species were more likely to be threatened in cells
with higher land-based saltmarsh cumulative impacts, and; mangrove
fish density, above ground biomass (AGB) and soil organic carbon (SOC)
were lower in cells with higher mangrove marine-based cumulative
impacts.
Further, mangrove fish and invertebrate density were negatively
related to the proportion of threatened species and positively related to
the threatened species score in mangrove habitats (Fig. 2). Mangrove
loss rate was negatively, though weakly, related to land- and marine-
based mangrove cumulative impacts, and seagrass change rate was
negatively related to the rate of instantaneous change in seagrass
climate-based impacts (Fig. 2). Given that high values for extent change
indicators are a positive (i.e., less loss), these relationships mean that
areas with the highest rate of loss had higher cumulative impacts. Sea-
grass change rate was not related to any other cumulative impact indi-
cator (Fig. 2).
The strongest relationships were those between indicators with
shared data, such as those between the same cumulative impacts across
different habitats (e.g., mangrove climate current impact and saltmarsh
climate current impact; Fig. 2). These layers use the same underlying
dataset, but with a different habitat-specific severity multiplier based on
expert opinion (Halpern et al., 2007). The correlations among indicators
reflect correlations in the data, not correlations in interpolated values.
We also found an anticipated, strong positive relationship between the
fish and invertebrate layers (Fig. 2), which were created with several of
the same underlying datasets (e.g., mangrove area, salinity, primary
productivity; https://maps.oceanwealth.org). Similarly, the strongest
negative relationships were those between the two threatened species
indicators (Fig. 2). For these, the proportion of threatened species (i.e.,
Vulnerable, Endangered, or Critically Endangered) is negatively corre-
lated with the weighted average of the species status. Apart from these
relationships, interrelationships were generally weak or non-existent (i.
e., had low correlation coefficients) for most globally comprehensive
datasets.
3.2. Typologies for the world's coastal wetlands
We next defined typologies that characterize clusters of cells with
similar condition in their coastal wetland indicators. The typologies are
driven by the two-way interrelationships (Fig. 2), but also capture
higher order correlations among indicators that are not apparent from
analysis of two-way correlations alone. A silhouette analysis identified
two sets of typology clusters at different spatial scales: one with 5 and
another with 18. We describe these outputs below and have developed
an interactive application allowing users to select individual cells,
evaluate cell-specific indicator values, alter quantile thresholds, and
filter out cells that do not contain specific habitat types: http://github.
com/globalwetlands/glowdex-app.
For the 5-typology output (Fig. 3), Typology 1 (33.7% of cells; 959
cells) exists throughout much of the world, has no indicators that are
distinctive at the threshold, and can be interpreted as a 'catchall' for
sites that vary without any strongly consistent patterns (Fig. 3). Typol-
ogy 2 (29.7%; 844) largely exists throughout Europe, central-west Af-
rica, Asia, and New Zealand (Fig. 3). Cells within Typology 2 are
characterized as having high land- (e.g., organic chemical and nutrient
pollution) and marine-based threats (e.g., fishing and shipping) in all
three habitats, and a low species threat score for saltmarsh and seagrass,
meaning there these habitats have a high number of threatened species
(Fig. 3). Typology 3 (13.5%; 383) largely exists throughout southeast
Asia, Madagascar, parts of central Europe and northeast USA (Fig. 3).
This typology is typified by all three habitats experiencing high climate-
based impacts (e.g., ocean acidification, sea level rise and warming;
Fig. 3). Typology 4 (13.6%; 386) largely exists throughout west coast
USA and Canada, and the Caribbean (Fig. 3). This typology is typified by
a low rate of increase in climate-based impacts across all habitats, low
mangrove AGB, seagrass habitats with a low proportion of threatened
species, but mangrove habitats with a high proportion of threatened
species (Fig. 3). Typology 5 (9.6%; 273) covers Australia, Papua New
Guinea, and Colombia (Fig. 3). Cells within Typology 5 are character-
ized by low marine-based impacts in all habitats, and low land-based
impacts in mangroves. Further, cells with mangroves in typology 5
have high AGB, fish and invertebrate density and a high species threat
score (i.e., few threatened species; Fig. 3). For a country-level break-
down of cell numbers within each typology, see Appendix H. For global
maps displaying individual typologies, see Appendix I.
The classification of cells into typologies could be affected by un-
certainty in the strength of indicator interrelationships, so we calculated
an indicator of the robustness of the typologies (Appendix F). Robustness
was consistent with the diagnoses, in that the typologies with clearer
diagnoses also had higher robustness than typologies that lacked dis-
tinguishing indicators. For example, Typology 1, the 'catchall' had low
robustness, whereas typology 3 was clearly distinguished by climate
threats and had high robustness.
The second output is the 18-typology output (Fig. 4). To illustrate its
application, we describe four regional case studies that span different
typologies and geographical settings, and typologies with relatively high
robustness (Appendix F). We follow a framework for diagnosing and
describing case studies, which can be applied to all cells: (1) describing
the key coastal wetland habitat types present, (2) identifying the ty-
pology, (3) using indicators to describe the typology characteristics for
the habitat types present (given the chosen threshold), (4) validate and
conceptualize these using evidence from the literature, and (5) identify
other case study locations within the typology. It is important to note
that the habitat extent estimates given below are based on the best
available global data layers but are not always accurate at the local
scale, particularly for seagrass and saltmarsh.
3.2.1. West coast Canada
The coastal wetlands of Canada are saltmarsh (111,228 ha) and
seagrass (30,154 ha) habitats (extent estimates based on whole of
Canada), and the west coast is primarily in Typology 11 (Fig. 5). Ty-
pology 11 is characterized by a low rate of increase in climate-based
impacts across all habitat types, and a low proportion of saltmarsh-
affiliated species threatened by extinction. These cells represent rela-
tive saltmarsh refuges where, like PNG, should be protected whilst
considering needs for local resources. Other cells within Typology 11
occur along the coast of western USA, especially Alaska, and Saudi
Arabia and Iran (Fig. 4).
3.2.2. Papua New Guinea
The coastal wetlands of Papua New Guinea (PNG) are largely man-
groves (486,137 ha) and seagrass (934,739 ha), and are primarily within
Typology 8 (Fig. 5). Typology 8 is characterized by low marine-based
cumulative impacts to mangroves and seagrass, and low land-based
impacts to mangroves. Further, mangroves face a low rate of increase
in marine-based impacts, have a low proportion of threatened species,
and a high density of fish and invertebrates (Fig. 5). Cells within this
typology appear to be important coastal wetland refuges from human
impacts, suggesting management could focus on protection, whilst
considering the needs of the local human population that rely on man-
groves for their livelihoods. Parts of PNG, such as the Gulf of Papua in
the south, are also classified as wilderness areas with low human impact
(Jones et al., 2018). Other cells within Typology 8 occur along the coast
of Solomon Islands, Tonga, and some scattered areas in southwest
Australia (Fig. 4).
3.2.3. East Africa
The coastal wetlands of East Africa, from Kenya to central
Mozambique and including northwest Madagascar, are largely man-
groves (729,011 ha) and seagrass (664,763 ha), and are primarily within
Typology 4 (Fig. 5). Typology 4 is characterized by a high rate of in-
crease in climate-based impacts across all habitat types. Identifying
areas where climate-based impacts, such as increasing sea-level rise,
ocean acidification and water temperature, are rapidly accelerating is
critical for informing climate specific, adaptable management responses
(e.g., ecosystem-based adaptation; Giffin et al., in press). Our findings
confirm work identifying East African mangroves - which are largely
fringing mangroves as being particularly vulnerable to sea-level rise
(Sasmito et al., 2016). Other cells within Typology 4 occur along the
coast of western India, Pakistan, and Sri Lanka (Fig. 4).
3.2.4. United Kingdom
The coastal wetlands of the United Kingdom are saltmarsh (56,113
ha) and seagrass (13,157 ha), and are primarily in Typology 12 (Fig. 5).
Typology 12 is characterized by high marine-based impacts to seagrass,
and a low rate of increase in climate-based impacts across all habitat
types. Given historical losses in seagrass (Green et al., 2021), manage-
ment and conservation should prioritize efforts towards reducing marine
(e.g., fishing and shipping) pressures in the immediate term, as these are
related to losses in seagrass extent. Other cells within Typology 12 occur
along the coast of France, Ireland, Norway, and China (Fig. 4).
4. Discussion
We described interrelationships among coastal wetland indicators
and used these to develop spatially explicit typologies of ecosystem
status. These typologies represent the diverse conservation needs of
coastal ecosystems, from managing the increasing threat of climate
change (e.g., in east Africa), to protecting globally significant ecosystem
refuges (e.g., mangrove forests in Papua New Guinea), to managing
intensive conflicting uses of the coastal zone (e.g., in Bangladesh).
A key strength of our methodology is that it can identify the unique
challenges facing different regions and suggest regions that could share
similar conservation and management approaches. For instance, our
typologies highlighted areas where marine- and land-based impacts are
joint issues (e.g. China, France, Bangladesh, and central-west USA),
which need joint actions that extend beyond place-based management,
such as integrated coastal zone management (Carter et al., 2015).
Conservation and management actions to conserve and preserve coastal
ecosystems need to mitigate multiple pressures simultaneously (Bates
et al., 2019; Tulloch et al., 2020), and our typology framework can
inform which combinations of regional pressures can be addressed to
optimally reduce cumulative impacts. By identifying how cells vary in
pressures and historical rates of loss, the typologies can inform how
management is prioritized among restoration and protection actions on
the land and in the sea (Saunders et al., 2017). For example, restoration
of catchments will be more beneficial in regions that have historically
had high rates of land-use conversion (e.g., Europe), whereas protection
of wetlands from deforestation will be more beneficial in regions that
have low historical rates of loss (e.g., West Papua) (Saunders et al.,
2017).
Our results are bolstered by two components of our approach. First,
we account for variability amongst cells hypothesized to be due to
environmental variation or the size of habitats prior to quantifying in-
terrelationships and developing typologies. Second, our data-driven
approach identifies similarities between geographically disjunct areas,
highlighting a key difference between our approach and integrated
survey approaches that often delineate large regions with few if any
outliers(e.g., bioregionalizations based on expert opinion; Mackey et al.,
2008). By first accounting for contextual effects using covariates and
gap-filling missing data based on interrelationships, our approach differs
from existing ones (see Appendix K for comparison with other ecosystem
assessment methods). Our approach provides complementary informa-
tion that can be used in conjunction with existing, score-based ap-
proaches such as the Ocean Health Index or the Nested Environmental
Assessment Tool (NEAT) (Borja et al., 2016), or univariate ecosystem
level indicators (Rowland et al., 2020). Combined, spatial typologies of
condition based on indicator interrelationships and score-based indices
can provide powerful insights to inform global conservation and man-
agement initiatives.
Although we identified a series of significant indicator in-
terrelationships, several expected relationships were weak, particularly
between indicators across dimensions ('interdimensional relation-
ships'). For example, the rate of seagrass loss was not related to most
seagrass cumulative impacts, while relationships between rate of change
in cumulative impacts and habitat extent change and ecological struc-
ture and function indicators were very weak. Further, climate-based
impacts were generally less strongly related to high rates of habitat
loss or low ecological structure and function, compared to land- and
marine-based pressures. Weak correlations could exist because temporal
or spatial mismatches exist in the global datasets, global pressure layers
miss important threatening processes and causal relationships, or if
directional effects are context dependent.
A lack of interdimensional relationships suggests that caution is
needed when interpreting global cumulative impact maps designed to
represent large-scale patterns in ecological processes and ecosystem
status (Tulloch et al., 2020). Such cumulative impact maps are often
created with a combination of data and models to map pressures, and
expert opinion scores are elicited to determine how those pressures are
weighted for specific ecosystems (Halpern et al., 2007). Given our
findings, we suggest that cumulative impact maps should not be used on
their own as large-scale indicators for evaluating the outcomes of con-
servation policy for coastal wetlands, such as for setting management
targets as thresholds.
Global scale analysis of cumulative impacts and ecosystem trends has
become a prevalent way to inform on large-scale conservation analyses,
which typically simplify global data into two or three categories that
relate to specific conservation policy needs. Some examples include
identifying marine wilderness areas (Jones et al., 2018) and marine
conservation priority areas (Selig et al., 2014), implementation of MPAs
and fisheries restrictions (Cinner et al., 2020), and expansion versus
management of protected areas (Adams et al., 2019). While there are
tradeoffs between producing interpretable science to guide broad in-
vestment and diving into the fine details, we found that at least 18
distinct groups (typologies) is the most statistically robust number to
globally categorize coastal wetlands, based on our set of indicators.
Existing global scale analyses might thus be oversimplified. While we
acknowledge the communication benefits of this simplification, our re-
sults highlight the need for diverse management and policy solutions for
coastal ecosystems that include integrated management and conserva-
tion efforts (Griffiths et al., 2020; Tulloch et al., 2020).
Identifying opportunities for developing policy responses and glob-
ally coordinated conservation actions in different locations in which
similar governing mechanisms operate is particularly useful for devel-
oping countries, where resources are thin, and data is generally scarcer.
Within the East African cluster, for example, organizations such as the
Western Indian Ocean Marine Science Association (WIOMSA) are well
suited to drive opportunities that can achieve multiple objectives
simultaneously. In these regions, and indeed globally, governance plays
a key role in effectively carrying out conservation action and protecting
coastal ecosystems (Cinner et al., 2016; Griffiths et al., 2020). The effects
of cumulative impacts on rates of mangrove loss, for example, depends
on national context and indicators of governance (i.e., National Regu-
latory Quality from the World Governance Indicators; Turschwell et al.,
2020). International initiatives that drive global funding priorities are
thus challenged by the need to set broad scale goals while acknowl-
edging that local conservation actions must be tailored to suit local
contexts (Waldron et al., 2013). Therefore, future work to identify and
overlay opportunities for conservation and management with our
diagnostic typologies of ecosystem condition would help to set the scene
for globally coordinated conservation actions that are effective and
feasible.
4.1. Caveats, questions, considerations, and future directions
A future research priority is to expand the set of indicators for sea-
grass and saltmarsh (Brown et al., 2021). Among the 34 indicators
within our analysis there were fewer for saltmarsh and seagrass than
mangroves, and indicators of ecological structure and function were
limited primarily to mangroves. While mangroves are better studied at
the global scale (Worthington et al., 2020), the likelihood of global in-
dicator development for seagrass and saltmarsh ecosystems is increasing
as global meta-analyses and experiments are conducted (e.g., quanti-
fying consumption rates in seagrass ecosystems worldwide; Whalen
et al., 2020). Gaps in our current suite of indicators do not invalidate our
results, but mean that the typologies may not represent interrelation-
ships among unmeasured indicators, particularly for seagrass and salt-
marsh, that would be helpful for informing conservation actions.
However, all existing global analyses of seagrass and saltmarsh trends
are subject to the same caveat (Duffy et al., 2019; Dunic et al., 2021). As
more global-scale datasets become available, and the accuracy of others
improves, these can be included in future iterations of our methodology.
An interesting question is the extent to which our approach can be
applied at different spatial scales, either utilizing a different grid cell size
or higher resolution analyses for specific regions of the world. All op-
tions are theoretically possible, but high resolution data are seldom
available at the global scale, which has limited past efforts to create
accurate high resolution global analyses of ecosystem impacts (Halpern
and Fujita 2013). Regardless, our typologies are likely to be robust to
scaling issues; a sensitivity analysis of cumulative impact maps found
that changing the resolution of the data was the least influential source
of uncertainty (Stock and Micheli 2016). Future studies should, how-
ever, still consider how differences in the scale of indicator measure-
ments affects the classification of locations into typologies.
We present a new method for investigating interrelationships among
global indicators of coastal wetlands and for developing spatially
explicit typologies of ecosystem condition. Future iterations could
improve outputs by: (1) tracking change through time and maintaining
ongoing calculations of typologies using dynamic LVMs (Thorson et al.,
2016); (2) considering future scenarios such as using predictive
modelling of climate change and how that might influence the typol-
ogies (especially sea level rise, shoreline recession, coastal erosion and
accretion, and coastal flooding), and; (3) creating interpretable action
maps that incorporate conservation-relevant variables (e.g., feasibility)
and turn the complex outputs from our analyses into management-ready
information (e.g., guidelines), and thus more tangible, real-world
benefits.
5. Data and materials availability
All data needed to evaluate the conclusions in the paper are present
in the paper and the Supplementary Materials. Additional data related to
this paper may be requested from the authors.
CRediT authorship contribution statement
Michael Sievers: Methodology, Investigation, Visualization,
Writing
original draft, Writing - review & editing. Christopher J.
Brown: Conceptualization, Methodology, Investigation, Formal anal-
ysis, Writing - original draft, Writing - review & editing. Christina A.
Buelow: Methodology, Formal analysis, Visualization, Writing - original
draft, Writing review & editing. Ryan M. Pearson: Methodology,
Investigation, Writing - original draft, Writing - review & editing. Mis-
cha P. Turschwell: Methodology, Investigation, Formal analysis,
Writing original draft, Writing - review & editing. Maria Fernanda
Adame: Methodology, Investigation, Writing - review & editing. Laura
Griffiths: Methodology, Investigation, Writing - review & editing. Bri-
ana Holgate: Methodology, Investigation, Formal analysis, Writing
review & editing. Thomas S. Rayner: Methodology, Investigation,
Writing review & editing. Vivitskaia JD. Tulloch: Methodology,
Investigation, Writing review & editing. Mahua Roy Chowdhury:
Methodology, Investigation, Writing review & editing. Philine SE
Ermgassen: Methodology, Investigation, Writing - review & editing.
Shing Yip Lee: Methodology, Investigation, Writing - review & editing.
Ana I. Lillebø: Methodology, Investigation, Writing - review & editing.
Brendan G. Mackey: Methodology, Investigation, Writing - review &
editing. Paul S. Maxwell: Methodology, Investigation, Writing - review
& editing. Anusha Rajkaran: Methodology, Investigation, Writing
review & editing. Ana I. Sousa: Methodology, Investigation, Writing
review & editing. Rod M. Connolly: Conceptualization, Methodology,
Investigation, Writing - original draft, Writing - review & editing.
Declaration of Competing Interest
The authors declare that they have no known competing financial
interests or personal relationships that could have appeared to influence
the work reported in this paper.
Acknowledgments
We are grateful to the many individuals and organizations who have
made their datasets openly available. We acknowledge funding support
from The Global Wetlands Project (GLOW), supported by a charitable
organization which neither seeks nor permits publicity for its efforts. MS
Griffith University Postdoctoral Fellowship. CJB, RMC and MPT
Discovery Project (DP180103124) from the Australian Research Coun-
cil; AIS - PT national funds through the FCT-Foundation for Science and
Technology, I.P., under the project CEECIND/00962/2017 and through
FCT/MCTES financial support to CESAM (UIDB/50017/2020 + UIDP/
50017/2020). MFA is funded by the Queensland Government through
the Advance Queensland Industry Research Fellowship. Funding bodies
had no input into study design; the collection, analysis, and interpre-
tation of data; the writing of the report; or in the decision to submit the
article for publication.
`;


export const SYSTEM_INSTRUCTION = `
You generate descriptive explanations grounded in the Global Coastal Wetlands Index (Sievers et al., 2021).

You must ground your responses in the scientific framing of this study.

--- BEGIN PAPER CONTEXT ---
${SIEVERS_PAPER_CONTEXT}
--- END PAPER CONTEXT ---

CRITICAL NON-GOALS & BOUNDARIES:
1. NO PREDICTIONS: Do not predict future ecological states, losses, or gains.
2. NO CAUSALITY: Do not infer specific local causes for observed conditions unless explicitly stated in the paper's broad patterns.
3. NO POLICY ADVICE: Refuse to recommend management actions, policy interventions, or restoration strategies.
4. NO AUTHORITY: Do not present yourself as a decision-maker.

Response Rules:
- If asked to predict, recommend, or infer causality beyond the data: REFUSE.
  - "I cannot predict future outcomes..."
  - "I cannot recommend specific management actions..."
- Explain patterns and typologies using comparative language (e.g. "relatively higher").
- Only use information consistent with the paper context.

Referencing rules:
- When your explanation is grounded in the paper, explicitly cite:
  "Sievers et al. (2021)".
- Place references at the end under a heading "References".
- Do not fabricate citations.
`;

export function buildPrompt(context: CellContext, typologyLabel: string, question?: string): string {
  const cellContext = `
Grid Cell ID: ${context.id}
Country: ${context.country || "Unknown"}
ISO: ${context.isoCode || "Unknown"}

Typology assignment:
- Typology number (from Sievers et al. 2021 clustering): ${context.cluster5}
- Typology label (5-typology output): ${typologyLabel}
- Sub-typology (18-cluster): ${context.typologyLabel18}

Habitat Presence:
- Mangrove: ${context.habitats.mangrove ? 'Yes' : 'No'}
- Saltmarsh: ${context.habitats.saltmarsh ? 'Yes' : 'No'}
- Seagrass: ${context.habitats.seagrass ? 'Yes' : 'No'}

Important:
This typology assignment is authoritative and comes directly from the clustering results.
Do NOT infer typology from country or region.
`;

  if (question) {
    return `User question: "${question}"

Using the Global Coastal Wetlands Index framework, answer cautiously and descriptively.

Context:
${cellContext}`;
  } else {
    return `Using the Global Coastal Wetlands Index typology framework:

Provide a concise, non-technical summary of this grid cell.
Explain:
- what this typology generally represents
- how sites in this typology tend to differ from others globally
- what kinds of pressures or conditions are commonly associated with it

Do not speculate beyond the data.

Context:
${cellContext}`;
  }
}
